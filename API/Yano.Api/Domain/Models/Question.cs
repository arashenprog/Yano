using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Domain.Models
{
    public class Question : BaseModel
    {
        public string Title { get; set; }
        public bool Enabled { get; set; }
        public ulong? CreatorPlayerId { get; set; } /*****The player who Create Question******/

        // TODO : Created Date ????

        public DateTime CreatedDate { get; set; }
        public bool Confirmed { get; set; } /***** For Questions That Players Create ****/
        public bool Rejected { get; set; }
        public ulong Yes { get; set; }
        public ulong No { get; set; }
        public ulong DisLike { get; set; }
        public ulong CategoryId { get; set; }

        // TODO : think about count or level
        public ulong Level { get; set; }

        public ulong Count { get; set; }


    }
}
