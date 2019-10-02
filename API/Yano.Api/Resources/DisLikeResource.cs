using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Resources
{
    public class DisLikeResource
    {
        public ulong PlayerId { get; set; }
        public ulong QuestionId { get; set; }
        public string Reason { get; set; }
    }
}
