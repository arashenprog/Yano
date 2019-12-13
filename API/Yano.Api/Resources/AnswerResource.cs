using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Yano.Api.Domain.Models;

namespace Yano.Api.Resources
{
    public class AnswerResource
    {
        public ulong PlayerId { get; set; }

        public ulong QuestionId { get; set; }
        public Answer Answer { get; set; }
        public string dislikeReason { get; set; }
    }
}
