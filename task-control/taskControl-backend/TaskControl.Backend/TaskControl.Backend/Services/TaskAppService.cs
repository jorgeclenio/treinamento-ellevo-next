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
        private readonly IUserAppService _userAppService;

        public TaskAppService(ITaskControlDbDatabaseSettings settings, IMapper mapper, IUserAppService userAppService)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _taskCollection = database.GetCollection<TaskEntity>("Tasks");
            _mapper = mapper;
            _userAppService = userAppService;
        }

        public async Task<TaskEntity> CreateTask(AddTaskModel addTaskModel)
        {
            var taskEntity = _mapper.Map<AddTaskModel, TaskEntity>(addTaskModel);

            await _taskCollection.InsertOneAsync(taskEntity);
            return taskEntity;
        }

        public List<TaskModel> GetAllTasks()
        {
            var taskEntities = _taskCollection.Find(task => true).ToList();
            List<TaskModel> taskModelsList = new List<TaskModel>();

            foreach (var taskEntity in taskEntities)
            {
                var newTaskModel = new TaskModel
                {
                    Id = taskEntity.Id.ToString(),
                    Description = taskEntity.Description,
                    Status = taskEntity.Status,
                    Title = taskEntity.Title,
                    Generator = _userAppService.GetUserById(taskEntity.GeneratorId),
                };

                if (taskEntity.ResponsibleId.HasValue)
                {
                    newTaskModel.Responsible = _userAppService.GetUserById(taskEntity.ResponsibleId.Value);
                }

                taskModelsList.Add(newTaskModel);
            }
            return taskModelsList;
        }

        public TaskModel GetTaskById(ObjectId taskId)
        {
            var taskEntity = _taskCollection.Find(task => task.Id == taskId).FirstOrDefault();

            var newTaskModel = new TaskModel
            {
                Id = taskEntity.Id.ToString(),
                Description = taskEntity.Description,
                Status = taskEntity.Status,
                Title = taskEntity.Title,
                Generator = _userAppService.GetUserById(taskEntity.GeneratorId),
            };

            if (taskEntity.ResponsibleId.HasValue)
            {
                newTaskModel.Responsible = _userAppService.GetUserById(taskEntity.ResponsibleId.Value);
            }

            return newTaskModel;
        }

        public DeleteResult DeleteTask(ObjectId taskId)
        {
            return _taskCollection.DeleteOne(task => task.Id == taskId);
        }

        public TaskEntity UpdateTask(UpdateTaskModel updateTaskModel, ObjectId taskId)
        {
            var taskEntity = _mapper.Map<UpdateTaskModel, TaskEntity>(updateTaskModel);
            taskEntity.Id = taskId;

            if (updateTaskModel.ResponsibleId == null)
            {
                taskEntity.ResponsibleId = null;
            }

            _taskCollection.ReplaceOne(task => task.Id == taskId, taskEntity);
            return taskEntity;
        }
    }
}
