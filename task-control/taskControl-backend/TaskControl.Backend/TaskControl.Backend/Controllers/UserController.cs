﻿using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System.Threading.Tasks;
using TaskControl.Backend.Models;
using TaskControl.Backend.Services;

namespace TaskControl.Backend.Controllers
{
    [ApiController]
    [Route("User")]
    public class UserController : ControllerBase
    {
        private readonly IUserAppService _userService;

        public UserController(IUserAppService userService)
        {
            _userService = userService;
        }

        [HttpPost]
        public async Task<IActionResult> CreateUser([FromBody] AddUserModel userModels)
        {
            return Ok(await _userService.CreateUser(userModels));
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            return Ok(_userService.GetAllUsers());
        }

        [HttpGet("{userId}")]
        public IActionResult GetUserById([FromRoute] string userId)
        {
            return Ok(_userService.GetUserById(new ObjectId(userId)));
        }

        [HttpDelete("{userId}")]
        public IActionResult DeleteUser([FromRoute] string userId)
        {
            _userService.DeleteUser(new ObjectId(userId));
            return NoContent();
        }
    }
}