using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TaskControl.Backend.Models
{
    public class TaskModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        public string Generator { get; set; }
        public string Title { get; set; }
        public string Description{ get; set; }
        public string Status { get; set; }
        public string Responsible { get; set; }
        public string Activity { get; set; }
    }
}
