using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Yano.Api.Domain.Models;
using Yano.Api.Resources;
using Yano.Api.Services;

namespace Yano.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    [Authorize]
    public class GameController : ControllerBase
    {
        IYanoGameService _service;
        public GameController(IYanoGameService service)
        {
            this._service = service;
        }


        [HttpPost]
        [Route("login")]
        [AllowAnonymous]
        public async Task<UserTokenResource> Login([FromBody] UserLoginResource login)
        {
            var user = await _service.LoginPlayer(login.Username, login.Password);
            return new UserTokenResource
            {
                Username = user.Username,
                FirstName = user.Firstname,
                LastName = user.Lastname,
                Token = user.Token
            };
        }

        // GET api/values
        [HttpGet]
        [Route("guess")]
        [AllowAnonymous]
        public async Task<IEnumerable<QuestionResource>> GetGuessQuestions()
        {
            var questions = await _service.GetGuestQuestions();
            return questions.Select(c => new QuestionResource
            {
                Id = c.Id,
                Title = c.Title
            });
        }

        [HttpGet]
        [Route("player/{playerid}")]
        public async Task<IEnumerable<QuestionResource>> GetPlayerQuestions(ulong playerid)
        {
            var questions = await _service.GetNextQuestions(playerid);
            return questions.Select(c => new QuestionResource
            {
                Id = c.Id,
                Title = c.Title
            });
        }
    }
}
