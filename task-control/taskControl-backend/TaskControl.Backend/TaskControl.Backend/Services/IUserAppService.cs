using MongoDB.Bson;
using MongoDB.Driver;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace TaskControl.Backend.Services
{
    public interface IUserAppService
    {
        Task<UserEntity> CreateUser(AddUserModel addUserModel);
        List<UserModel> GetAllUsers();
        UserModel GetUserById(ObjectId userId);
        DeleteResult DeleteUser(ObjectId userId);
        UserEntity UpdateUser(UpdateUserModel userModels, ObjectId userId);
        Task<string> Login(LoginModel login);
    }
}
