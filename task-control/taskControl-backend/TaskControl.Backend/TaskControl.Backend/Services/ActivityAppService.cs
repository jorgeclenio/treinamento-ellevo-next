using AutoMapper;
using MongoDB.Driver;
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
    }
}
