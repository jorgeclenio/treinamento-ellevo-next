using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;

namespace TaskControl.Backend.Models
{
    public class ActivityModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }
        public string Description { get; set; }
        public string TaskId { get; set; }
        public DateTime Date { get; set; }
    }
}
