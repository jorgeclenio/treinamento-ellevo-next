using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TaskControl.Backend.Entities
{
    [BsonDiscriminator("Users")]
    public class UserEntity
    {
        public ObjectId Id { get; set; }
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Cpf { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}
