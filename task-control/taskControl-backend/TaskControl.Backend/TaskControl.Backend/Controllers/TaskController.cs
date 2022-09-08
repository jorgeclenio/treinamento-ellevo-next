using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System.Threading.Tasks;
using TaskControl.Backend.Models;
using TaskControl.Backend.Services;

namespace TaskControl.Backend.Controllers
{
    [ApiController]
    [Route("Task")]
    public class TaskController : Controller
    {
        private readonly ITaskAppService _taskService;

        public TaskController(ITaskAppService taskService)
        {
            _taskService = taskService;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateTask([FromBody] AddTaskModel taskModels)
        {
            return Ok(await _taskService.CreateTask(taskModels));
        }
        
        [HttpGet]
        [Authorize]
        public IActionResult GetAllTasks()
        {
            return Ok(_taskService.GetAllTasks());
        }

        [HttpGet("{taskId}")]
        [Authorize]
        public IActionResult GetTaskById([FromRoute] string taskId)
        {
            return Ok(_taskService.GetTaskById(new ObjectId(taskId)));
        }

        [HttpDelete("{taskId}")]
        [Authorize]
        public IActionResult DeleteTask([FromRoute] string taskId)
        {
            _taskService.DeleteTask(new ObjectId(taskId));
            return NoContent();
        }

        [HttpPut("{taskId}")]
        [Authorize]
        public IActionResult UpdateTask([FromBody] UpdateTaskModel taskModels, [FromRoute] string taskId)
        {
            return Ok(_taskService.UpdateTask(taskModels, new ObjectId(taskId)));
        }
    }
}
