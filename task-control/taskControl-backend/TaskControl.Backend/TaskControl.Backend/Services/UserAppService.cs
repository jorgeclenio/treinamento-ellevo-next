using AutoMapper;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using TaskControl.Backend.Cryptography;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace TaskControl.Backend.Services
{
    public class UserAppService : IUserAppService
    {
        private readonly IMongoCollection<UserEntity> _userCollection;
        private readonly IMapper _mapper;

        public UserAppService(ITaskControlDbDatabaseSettings settings, IMapper mapper)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.DatabaseName);

            _userCollection = database.GetCollection<UserEntity>("Users");
            _mapper = mapper;
        }

        public async Task<UserEntity> CreateUser(AddUserModel addUserModel)
        {
            var userEntity = _mapper.Map<AddUserModel, UserEntity>(addUserModel);

            await _userCollection.InsertOneAsync(userEntity);
            return userEntity;
        }

        public List<UserModel> GetAllUsers()
        {
            var userEntities = _userCollection.Find(task => true).ToList();
            List<UserModel> userModelsList = new List<UserModel>();

            foreach (var userEntity in userEntities)
            {
                userModelsList.Add(_mapper.Map<UserEntity, UserModel>(userEntity));
            }
            return userModelsList;
        }

        public UserModel GetUserById(ObjectId userId)
        {
            var userEntity = _userCollection.Find(user => user.Id == userId).FirstOrDefault();

            return _mapper.Map<UserEntity, UserModel>(userEntity);
        }

        public DeleteResult DeleteUser(ObjectId userId)
        {
            return _userCollection.DeleteOne(user => user.Id == userId);
        }

        public UserEntity UpdateUser(UpdateUserModel updateUserModel, ObjectId userId)
        {
            var userEntity = _mapper.Map<UpdateUserModel, UserEntity>(updateUserModel);
            userEntity.Id = userId;

            _userCollection.ReplaceOne(task => task.Id == userId, userEntity);
            return userEntity;
        }

        public async Task<JwtModel> Login(LoginModel login)
        {
            var userEntity = await _userCollection.Find(user => user.UserName == login.UserName).FirstOrDefaultAsync();

            if (userEntity.Password != TaskControlCryptography.Encrypt(login.Password))
            {
                throw new Exception("Invalid credentials.");
            }

            return new JwtModel
            {

                AccessToken = TokenService.GenerateToken(userEntity),
                UserId = userEntity.Id.ToString()
            };
        }
    }
}
