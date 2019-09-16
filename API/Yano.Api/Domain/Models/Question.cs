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

        public ulong Like { get; set; }

        public ulong DisLike { get; set; }

        public ulong Skip { get; set; }


        public byte ActiveFlag { get; set; }
        public byte RejectedFlag { get; set; }
        public byte ConfirmedFlag { get; set; } /***** For Questions That Players Create ****/
        public ulong RejectReasonId { get; set; }
        public ulong? CreatorPlayerId { get; set; } /*****The player who Create Question******/
    }
}
