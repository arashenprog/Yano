using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Domain.Models
{
    public class Question : BaseModel
    {
        public string Title { get; set; }
        public ulong CategoryId { get; set; }

        public ulong Yes { get; set; }
        public ulong No { get; set; }
        public ulong Count { get; set; }

        public ulong DisLike { get; set; }

        public bool Enabled { get; set; }
        public bool Rejected { get; set; }
        public bool Confirmed { get; set; } /***** For Questions That Players Create ****/
        public ulong? CreatorPlayerId { get; set; } /*****The player who Create Question******/
    }
}
