using AutoMapper;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace TaskControl.Backend.Services
{
    public class ActivityAppService : IActivityAppService
    {
        private readonly IMongoCollection<ActivityEntity> _activityCollection;
        private readonly IMapper _mapper;

        public ActivityAppService(ITaskControlDbDatabaseSettings settings, IMapper mapper)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _activityCollection = database.GetCollection<ActivityEntity>("Activities");
            _mapper = mapper;
        }

        public async Task<ActivityEntity> CreateActivity(AddActivityModel addActivityModel)
        {
            var activityEntity = _mapper.Map<AddActivityModel, ActivityEntity>(addActivityModel);

            _activityCollection.InsertOne(activityEntity);
            return activityEntity;
        }

        public List<ActivityModel> GetAllActivities(ObjectId taskId)
        {
            var activityEntities = _activityCollection.Find(activity => activity.TaskId == taskId).ToList();
            List<ActivityModel> activityModelsList = new List<ActivityModel>();

            foreach (var activityEntity in activityEntities)
            {
                activityModelsList.Add(_mapper.Map<ActivityEntity, ActivityModel>(activityEntity));
            }
            return activityModelsList;
        }

        public ActivityModel GetActivityById(ObjectId activityId)
        {
            var activityEntity = _activityCollection.Find(activity => activity.Id == activityId).FirstOrDefault();

            return _mapper.Map<ActivityEntity, ActivityModel>(activityEntity);
        }

        public DeleteResult DeleteActivity(ObjectId activityId)
        {
            return _activityCollection.DeleteOne(activity => activity.Id == activityId);
        }

        public ActivityEntity UpdateActivity(UpdateActivityModel updateActivityModel, ObjectId activityId)
        {
            var activityEntity = _activityCollection.Find(activity => activity.Id == activityId).FirstOrDefault();
            activityEntity.Description = updateActivityModel.Description;

            _activityCollection.ReplaceOne(activity => activity.Id == activityId, activityEntity);
            return activityEntity;
        }
    }
}
