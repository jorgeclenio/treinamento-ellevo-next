﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TaskControl.Backend.Models
{
    public class UserModels
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int Cpf {  get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}
