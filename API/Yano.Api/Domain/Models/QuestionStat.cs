using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Domain.Models
{
    public class QuestionStat
    {
        public uint Count { get; set; }
        public ulong QuestionId { get; set; }
        public byte Yes { get; set; }
        public byte No { get; set; }
        public byte Like { get; set; }
        public byte DisLike { get; set; }

    }
}
