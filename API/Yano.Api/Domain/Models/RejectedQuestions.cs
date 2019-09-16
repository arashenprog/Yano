using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Domain.Models
{
    public class RejectedQuestions : BaseModel
    {
        public ulong RejectReasonId { get; set; }
        public ulong QuestionId { get; set; }
        public ulong PlayerId { get; set; }

    }
}
