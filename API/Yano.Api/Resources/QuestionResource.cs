using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Resources
{
    public class QuestionResource
    {
        public ulong Id { get; set; }

        public string Title { get; set; }
        public ulong Yes { get; set; }
        public ulong No { get; set; }
        public ulong DisLike { get; set; }
        public ulong CategoryId { get; set; }
        public ulong Level { get; set; }
        public ulong Count { get; set; }
        public int YesPercent { get; set; }
        public int NoPercent { get; set; }
        public int DisLikePercent { get; set; }


    }
}
