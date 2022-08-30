using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace TaskControl.Backend.Services
{
    public interface ITaskAppService
    {
        Task<TaskEntity> CreateTask(AddTaskModel addTaskModel);
        List<TaskModel> GetAllTasks();
        TaskModel GetTaskById(ObjectId taskId);
        DeleteResult DeleteTask(ObjectId taskId);
        TaskEntity UpdateTask(UpdateTaskModel taskModels, ObjectId taskId);
    }
}
