using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Domain.Models
{
    public class Question : BaseModel
    {
        public string Title { get; set; }
        public ulong Yes { get; set; }
        public ulong No { get; set; }

        public ulong Like { get; set; }

        public ulong DisLike { get; set; }

    }
}
