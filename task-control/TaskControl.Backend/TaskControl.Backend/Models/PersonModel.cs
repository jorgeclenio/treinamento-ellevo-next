using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TaskControl.Backend.Models
{
    public class PersonModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int Cpf { get; set; }
        public int Phone { get; set; }
        public string Email { get; set; }
    }
}
