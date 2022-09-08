using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace TaskControl.Backend.Entities
{
    [BsonDiscriminator("Activities")]
    public class ActivityEntity
    {
        public ObjectId Id { get; set; }
        public string Description { get; set; }
        public string TaskId { get; set; }
    }
}
