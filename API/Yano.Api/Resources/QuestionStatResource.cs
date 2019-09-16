using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Resources
{
    public class QuestionStatResource
    {
        public uint Count { get; set; }
        public byte Yes { get; set; }
        public byte No { get; set; }
    }
}
