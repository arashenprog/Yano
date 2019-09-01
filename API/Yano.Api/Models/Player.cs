using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Models
{
    public class Player : BaseModel
    {
        public string Firstname { get; set; }
        public string Lastname { get; set; }

        public PlayerGender Gender { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
