using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Yano.Api.Domain.Models;

namespace Yano.Api.Resources
{
    public class RegisterResource
    {
        public PlayerGender Gender { get; set; }
        public int Age { get; set; }
        public string Fullname { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
    }
}
