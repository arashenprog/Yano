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
        IMongoDatabase db;

        protected IMongoCollection<Question> Questions { get => db.GetCollection<Question>("questions"); }
        protected IMongoCollection<Player> Players { get => db.GetCollection<Player>("players"); }
        protected IMongoCollection<PlayerAnswer> PlayerAnswers { get => db.GetCollection<PlayerAnswer>("answers"); }

        protected IFindFluent<Question, Question> ActiveQuestions { get => this.Questions.Find(c => c.Enabled && c.Confirmed); }

        private void GenerateMockData()
        {
            if (this.Questions.CountDocuments(c => true) == 0)
            {
                var question = new List<Question>();
                for (int i = 0; i < 1000; i++)
                {
                    question.Add(new Question
                    {
                        Title = $"سوال شماره {i}?"
                    });
                }
                this.Questions.InsertManyAsync(question);
                //
                var names = new string[] { "مسعود", "آرش", "هومن", "رضا", "علی", "فرزانه", "الناز", "قرنوش", "شقایق", "مریم", "مینا" };
                var families = new string[] { "اصغری", "اکبری", "رضایی", "کیان", "فراهانی", "حسینی", "نادری", "کیانی", "توکلی", "اشنودی", "آقایی", "صفری" };
                var players = new List<Player>();
                var random = new Random();
                for (int i = 0; i < 500; i++)
                {
                    players.Add(new Player
                    {
                        FullName = string.Format("{0} {1}", names.PickRandom(), families.PickRandom()),
                        Gender = new List<PlayerGender>() { PlayerGender.Man, PlayerGender.Woman, PlayerGender.Unknown }.PickRandom(),
                        Password = "123",
                        Username = $"User{i + 1}",
                        Email = $"User{i + 1}@gmail.com",
                        Age = random.Next(10, 70)
                    });
                }
                this.Players.InsertManyAsync(players);
                //


            }
        }

        #endregion

        #region Constructor
        private readonly AppSettings _appSettings;

        public YanoGameService(IOptions<AppSettings> appSettings)
        {
            _appSettings = appSettings.Value;
            this.client = new MongoClient(connectionString);
            db = client.GetDatabase("yano");
            if (true)
            {
                //TODO: Generate mock data
                GenerateMockData();
            }
        }

        #endregion



        #region Api Methods

        public async Task<Player> RegisterPlayer(string fullname, string email, string phone, int age, PlayerGender gender, string username, string password)
        {
            var player = new Player();
            player.Age = 0;
            player.Email = email;
            player.Phone = phone;
            player.Gender = gender;
            player.FullName = fullname;
            player.Enabled = true;
            player.Password = password;
            player.Username = username;
            await this.Players.InsertOneAsync(player);
            return player;
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
                var last = this.PlayerAnswers.Find(c => c.Id == playerId).SortByDescending(c => c.Id).FirstOrDefault();
                ulong lastId = 0;
                if (last != null)
                    lastId = last.Id;
                var res = this.Questions.Find(c =>  c.Id > lastId).Limit(20);
                return await res.ToListAsync();
            }
            catch (Exception e)
            {
                throw e;
            }
        }

        public async Task<IEnumerable<Question>> GetGuestQuestions()
        {
            return await this.Questions.Find(c => true).Limit(10).ToListAsync();
        }

        public async Task Answer(ulong playerId, ulong questionId, Answer answer)
        {
            this.PlayerAnswers.InsertOne(new PlayerAnswer
            {
                PlayerId = playerId,
                QuestionId = questionId,
                Answer = answer
            });
            //
            var filter = Builders<Question>.Filter.Eq(x => x.Id, questionId);
            UpdateDefinition<Question> update = null;
            if (answer == Yano.Api.Domain.Models.Answer.No)
                update = Builders<Question>.Update.Inc(x => x.No, (ulong)1).Inc(x => x.Count, (ulong)1);
            if (answer == Yano.Api.Domain.Models.Answer.Yes)
                update = Builders<Question>.Update.Inc(x => x.Yes, (ulong)1).Inc(x => x.Count, (ulong)1);
            //
            await Questions.UpdateOneAsync(filter, update);
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
