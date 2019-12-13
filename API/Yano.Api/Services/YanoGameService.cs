using Dapper;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Yano.Api.Domain.Models;
using Yano.Api.Utils.Extensions;

namespace Yano.Api.Services
{
    public class YanoGameService : IYanoGameService
    {

        #region DBContext

        MongoClient client;
        string connectionString = "mongodb://localhost:27017";

        string _yanoConnection;

        IMongoDatabase db;

        protected IMongoCollection<Question> Questions { get => db.GetCollection<Question>("questions"); }
        protected IMongoCollection<Player> Players { get => db.GetCollection<Player>("players"); }
        protected IMongoCollection<PlayerAnswer> PlayerAnswers { get => db.GetCollection<PlayerAnswer>("answers"); }

        protected IFindFluent<Question, Question> ActiveQuestions { get => this.Questions.Find(c => c.Enabled && c.Confirmed); }



        #endregion

        #region Constructor
        private readonly AppSettings _appSettings;

        public YanoGameService(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;

            this.client = new MongoClient(connectionString);
            db = client.GetDatabase("yano");
            //
            _yanoConnection = _appSettings.Connection;
        }

        #endregion



        #region Api Methods

        public async Task<Player> RegisterPlayer(string fullname, string email, string phone, int age, PlayerGender gender, string username, string password)
        {
            using (var conn = new System.Data.SqlClient.SqlConnection(this._yanoConnection))
            {
                var player = new Player();
                player.Age = age;
                player.Email = email;
                player.Phone = phone;
                player.Gender = gender;
                player.FullName = fullname;
                player.Enabled = true;
                player.Password = password;
                player.Username = username;
                await conn.ExecuteAsync(@"
                            INSERT INTO dbo.Players (age,email,phone,Gender,fullname,enabled,password,username) 
                            VALUES (@Age,@Email,@Phone,@Gender,@FullName,@Enabled,@Password,@Username)",
                            player);
                return player;
            }
            //await this.Players.InsertOneAsync(player);

        }



        public async Task<Player> LoginPlayer(string username, string password)
        {
            var user = await Players.Find(x => x.Username == username && x.Password == password).FirstOrDefaultAsync();

            // return null if user not found
            if (user == null)
                return null;

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);
            return user;
        }

        public async Task<IEnumerable<Question>> GetNextQuestions(ulong playerId)
        {
            try
            {
                //var last = this.PlayerAnswers.Find(c => c.Id == playerId).SortByDescending(c => c.Id).FirstOrDefault();
                //ulong lastId = 0;
                //if (last != null)
                //    lastId = last.Id;
                //var res = this.Questions.Find(c => c.Id > lastId).Limit(20);
                //return await res.ToListAsync();
                var parameters = new { PlayerId = Convert.ToInt64(playerId) };
                using (var conn = new System.Data.SqlClient.SqlConnection(this._yanoConnection))
                {
                    return await conn.QueryAsync<Question>("select Title,Id,Yes, No, DisLike,Level,CategoryId " +
                                                           ",Count,YesPercent,NoPercent,DisLikePercent " +
                                                           "from [App].[GetNextQuestionSerie](@PlayerId)", parameters);
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<IEnumerable<Question>> GetGuestQuestions()
        {
            try
            {
                using (var conn = new System.Data.SqlClient.SqlConnection(this._yanoConnection))
                {
                    var parameters = new { Level = 1 };
                    return await conn.QueryAsync<Question>("select Title,Id,Yes, No, DisLike,Level,CategoryId " +
                                                           "Count, YesPercent, NoPercent, DisLikePercent " +
                                                           "from app.GetGuessQuestions(@Level)", parameters);
                }
            }
            catch (Exception e)
            {
                throw e;
            }

            //return await this.Questions.Find(c => true).Limit(10).ToListAsync();
        }

        public async Task QuestionAnswer(ulong playerId, ulong questionId, Answer answer,string dislikeReason)
        {
            //this.PlayerAnswers.InsertOne(new PlayerAnswer
            //{
            //    PlayerId = playerId,
            //    QuestionId = questionId,
            //    Answer = answer
            //});
            ////
            //var filter = Builders<Question>.Filter.Eq(x => x.Id, questionId);
            //UpdateDefinition<Question> update = null;
            //if (answer == Yano.Api.Domain.Models.Answer.No)
            //    update = Builders<Question>.Update.Inc(x => x.No, (ulong)1).Inc(x => x.Count, (ulong)1);
            //if (answer == Yano.Api.Domain.Models.Answer.Yes)
            //    update = Builders<Question>.Update.Inc(x => x.Yes, (ulong)1).Inc(x => x.Count, (ulong)1);
            ////
            //await Questions.UpdateOneAsync(filter, update);

            try
            {
                using (var conn = new System.Data.SqlClient.SqlConnection(this._yanoConnection))
                {
                    var yes = 0; var no = 0; var disLike = 0;
                    if (answer == Answer.Yes)
                        yes = 1;
                    else if (answer == Answer.No)
                        no = 1;
                    else if (answer == Answer.DisLike)
                        disLike = 1;
                    var parameters = new
                    {
                        PlayerId = Convert.ToInt64(playerId),
                        QuestionId = Convert.ToInt64(questionId),
                        Yes = yes,
                        No = no,
                        Dislike = disLike,
                        DislikeReason = dislikeReason
                    };
                    await conn.ExecuteAsync("[App].[Save_User_Answer_Sp](@PlayerId ,@QuestionId ,@Yes ,@No ,@DisLike ,@DisLikeReason )", parameters);
                }
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task DisLike(ulong playerId, ulong questionId, string reason)
        {
            var filter = Builders<Question>.Filter.Eq(x => x.Id, questionId);
            var update = Builders<Question>.Update.Inc(x => x.DisLike, (ulong)1);
            await this.PlayerAnswers.InsertOneAsync(new PlayerAnswer
            {
                PlayerId = playerId,
                QuestionId = questionId,
                Answer = Yano.Api.Domain.Models.Answer.DisLike,
                DisLikeReason = reason
            });
            await Questions.UpdateOneAsync(filter, update);
        }

        public async Task<Player> UpdateProfile(ulong playerId, string name, string email, string phone, int age, PlayerGender gender, string username, string password)
        {
            var user = await Players.Find(x => x.Id == playerId).FirstOrDefaultAsync();

            if (user == null)
                return null;

            user.FullName = name;
            user.Email = email;
            user.Phone = phone;
            user.Age = age;
            user.Gender = gender;
            user.Username = phone;
            user.Password = password;

            return user;
        }
    }

    #endregion
}
