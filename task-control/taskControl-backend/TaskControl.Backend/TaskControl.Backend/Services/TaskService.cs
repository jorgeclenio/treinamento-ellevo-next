using AutoMapper;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace TaskControl.Backend.Services
{
    public class TaskService : ITaskService
    {
        private readonly IMongoCollection<TaskEntity> _taskCollection;
        private readonly IMapper _mapper;

        public TaskService(ITaskControlDbDatabaseSettings settings, IMapper mapper)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _taskCollection = database.GetCollection<TaskEntity>(settings.CollectionName);
            _mapper = mapper;
        }

        public async Task<TaskEntity> Create(AddTaskModels addTaskModel)
        {
            var taskEntity = _mapper.Map<AddTaskModels, TaskEntity>(addTaskModel);

            _taskCollection.InsertOne(taskEntity);
            return taskEntity;
        }

        public List<TaskModels> GetAllTasks()
        {
            var taskEntities = _taskCollection.Find(task => true).ToList();
            List<TaskModels> taskModelsList = new List<TaskModels>();

            foreach (var taskEntity in taskEntities)
            {
                taskModelsList.Add(_mapper.Map<TaskEntity, TaskModels>(taskEntity));
            }
            return taskModelsList;
        }

        public TaskModels GetTaskById(ObjectId taskId)
        {
            var taskEntity = _taskCollection.Find(task => task.Id == taskId).FirstOrDefault();

            return _mapper.Map<TaskEntity, TaskModels>(taskEntity);
        }

        public DeleteResult DeleteTask(ObjectId taskId)
        {
            return _taskCollection.DeleteOne(task => task.Id == taskId);
        }
    }
}
