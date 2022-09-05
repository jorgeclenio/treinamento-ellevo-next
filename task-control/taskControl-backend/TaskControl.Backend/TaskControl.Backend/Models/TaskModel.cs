using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TaskControl.Backend.Enums;

namespace TaskControl.Backend.Models
{
    public class TaskModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public UserModel Generator { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public ETaskTypes Status { get; set; }
        public UserModel Responsible { get; set; }
    }
}
