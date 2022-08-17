using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace TaskControl.Backend.Services
{
    public interface ITaskService
    {
        Task<TaskEntity> Create(AddTaskModels addTaskModel);
        List<TaskModels> GetAllTasks();
        TaskModels GetTaskById(ObjectId taskId);
        DeleteResult DeleteTask(ObjectId taskId);
    }
}
