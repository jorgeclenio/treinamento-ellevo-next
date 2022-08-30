using AutoMapper;
using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace TaskControl.Backend.Services
{
    public class TaskAppService : ITaskAppService
    {
        private readonly IMongoCollection<TaskEntity> _taskCollection;
        private readonly IMapper _mapper;

        public TaskAppService(ITaskControlDbDatabaseSettings settings, IMapper mapper)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _taskCollection = database.GetCollection<TaskEntity>("Tasks");
            _mapper = mapper;
        }

        public async Task<TaskEntity> CreateTask(AddTaskModel addTaskModel)
        {
            var taskEntity = _mapper.Map<AddTaskModel, TaskEntity>(addTaskModel);

            _taskCollection.InsertOne(taskEntity);
            return taskEntity;
        }

        public List<TaskModel> GetAllTasks()
        {
            var taskEntities = _taskCollection.Find(task => true).ToList();
            List<TaskModel> taskModelsList = new List<TaskModel>();

            foreach (var taskEntity in taskEntities)
            {
                taskModelsList.Add(_mapper.Map<TaskEntity, TaskModel>(taskEntity));
            }
            return taskModelsList;
        }

        public TaskModel GetTaskById(ObjectId taskId)
        {
            var taskEntity = _taskCollection.Find(task => task.Id == taskId).FirstOrDefault();

            return _mapper.Map<TaskEntity, TaskModel>(taskEntity);
        }

        public DeleteResult DeleteTask(ObjectId taskId)
        {
            return _taskCollection.DeleteOne(task => task.Id == taskId);
        }

        public TaskEntity UpdateTask(UpdateTaskModel updateTaskModel, ObjectId taskId)
        {
            var taskEntity = _mapper.Map<UpdateTaskModel, TaskEntity>(updateTaskModel);
            taskEntity.Id = taskId;

            _taskCollection.ReplaceOne(task => task.Id == taskId, taskEntity);
            return taskEntity;
        }
    }
}
