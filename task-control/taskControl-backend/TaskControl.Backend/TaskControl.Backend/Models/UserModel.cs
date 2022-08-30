using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TaskControl.Backend.Models
{
    public class UserModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Cpf {  get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}
