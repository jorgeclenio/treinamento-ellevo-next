using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using TaskControl.Backend.Enums;

namespace TaskControl.Backend.Models
{
    public class TaskModels
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public ObjectId Id { get; set; }

        public ObjectId GeneratorId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public ETaskTypes Status { get; set; }
        public ObjectId ResponsibleId { get; set; }
        public ObjectId ActivityId { get; set; }
    }
}
