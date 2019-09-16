﻿using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
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
                        Firstname = names.PickRandom(),
                        Lastname = families.PickRandom(),
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
        public YanoGameService()
        {
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

        public Task<Player> RegisterPlayer(string name, string email, int age, PlayerGender gender, string username, string password)
        {
            throw new NotImplementedException();
        }

        public Task<Player> LoginPlayer(string username, string password)
        {
            throw new NotImplementedException();
        }

        public Task<IEnumerable<Question>> GetNextQuestions(ulong playerId)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Question>> GetGuestQuestions()
        {
            return await this.Questions.FindSync(c => true).ToListAsync();
        }

        public Task<QuestionStat> Answer(ulong playerId, ulong questionId, Answer answer)
        {
            throw new NotImplementedException();
        }

        public void Like(ulong playerId, ulong questionId)
        {
            throw new NotImplementedException();
        }

        public void DisLike(ulong playerId, ulong questionId)
        {
            throw new NotImplementedException();
        }

        #endregion
    }
}