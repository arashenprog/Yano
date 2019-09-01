using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Yano.Api.Models;

namespace Yano.Api.Game
{
    public interface IYanoGame
    {
        Player RegisterPlayer(string name, string email, int age, PlayerGender gender, string username, string password);
        Player LoginPlayer(string username, string password);
        IList<Question> GetNextQuestions(ulong playerId);
        QuestionStat Answer(ulong playerId, ulong questionId, Answer answer);
        void Like(ulong playerId, ulong questionId);
        void DisLike(ulong playerId, ulong questionId);
    }
}
