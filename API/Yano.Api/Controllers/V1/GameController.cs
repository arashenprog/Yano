using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Yano.Api.Domain.Models;
using Yano.Api.Resources;
using Yano.Api.Services;

namespace Yano.Api.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
        IYanoGameService _service;
        public GameController(IYanoGameService service)
        {
            this._service = service;
        }

        // GET api/values
        [HttpGet]
        [Route("guess")]
        public async Task<IEnumerable<QuestionResource>> GetGuessQuestions()
        {
            var questions = await _service.GetGuestQuestions();
            return questions.Select(c => new QuestionResource
            {
                Id = c.Id,
                Title = c.Title
            });
        }
    }
}
