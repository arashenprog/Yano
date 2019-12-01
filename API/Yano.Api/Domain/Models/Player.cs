using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Domain.Models
{
    public class Player : BaseModel
    {
        public string FullName { get; set; }

        // TODO : Created Date ????

        public DateTime CreatedDate { get; set; }

        public PlayerGender Gender { get; set; }
        public int Age { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public bool Enabled { get; set; }
        public string Phone { get; set; }
    }
}
