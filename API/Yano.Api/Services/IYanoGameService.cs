using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Yano.Api.Domain.Models;

namespace Yano.Api.Services
{
    public interface IYanoGameService
    {
        Task<Player> RegisterPlayer(string name, string email, string phone, int age, PlayerGender gender, string username, string password);
        Task<Player> LoginPlayer(string username, string password);
        Task<Player> UpdateProfile(ulong playerId, string name, string email, string phone, int age, PlayerGender gender, string username, string password);
   
        Task<IEnumerable<Question>> GetNextQuestions(ulong playerId);
        Task<IEnumerable<Question>> GetGuestQuestions();
        Task QuestionAnswer(ulong playerId, ulong questionId, Answer answer, string dislikeReason);
        Task DisLike(ulong playerId, ulong questionId,string reason);

    }
}
