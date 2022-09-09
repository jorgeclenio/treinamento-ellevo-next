using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace TaskControl.Backend.Services
{
    public interface IActivityAppService 
    {
        Task<ActivityEntity> CreateActivity(AddActivityModel addActivityModel);
        List<ActivityModel> GetAllActivities(ObjectId taskId);
        ActivityModel GetActivityById(ObjectId activityId);
        DeleteResult DeleteActivity(ObjectId activityId);
        ActivityEntity UpdateActivity(UpdateActivityModel updateActivityModel, ObjectId activityId);
    }
}
