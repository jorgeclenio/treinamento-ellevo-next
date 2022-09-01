using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System.Collections.Generic;
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

        [HttpPost("/login")]
        public async Task<IActionResult> Login([FromBody] LoginModel login)
        {
            var jwtLogin = await _userService.Login(login);
            
            if(jwtLogin != null)
            {
                return Ok(jwtLogin);
            }            
            return BadRequest();
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateUser([FromBody] AddUserModel userModels)
        {
            return Ok(await _userService.CreateUser(userModels));
        }

        [HttpGet]
        [ProducesResponseType(typeof(IEnumerable<UserModel>), 200)]
        [Authorize]
        public IActionResult GetAllUsers()
        {
            return Ok(_userService.GetAllUsers());
        }

        [HttpGet("{userId}")]
        [Authorize]
        public IActionResult GetUserById([FromRoute] string userId)
        {
            return Ok(_userService.GetUserById(new ObjectId(userId)));
        }

        [HttpDelete("{userId}")]
        [Authorize]
        public IActionResult DeleteUser([FromRoute] string userId)
        {
            _userService.DeleteUser(new ObjectId(userId));
            return NoContent();
        }

        [HttpPut("{userId}")]
        [Authorize]
        public IActionResult UpdateUser([FromBody] UpdateUserModel userModels, [FromRoute] string userId)
        {
            return Ok(_userService.UpdateUser(userModels, new ObjectId(userId)));
        }

        [HttpGet("/token-verification")]
        [Authorize]
        public IActionResult TokenVerification ()
        {
            return Ok();
        }
    }
}
