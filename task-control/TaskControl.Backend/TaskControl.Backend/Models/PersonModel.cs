using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskControl.Backend.Models
{
    public class PersonModel
    {
        public ObjectId Id { get; set; }

        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int Cpf { get; set; }                    //chave unica
        public int Phone { get; set; }
        public string Email { get; set; }
    }
}
