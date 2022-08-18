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
        public async Task<IActionResult> CreateTask([FromBody] AddTaskModel taskModels)
        {
            return Ok(await _taskService.CreateTask(taskModels));
        }

        [HttpGet]
        public IActionResult GetAllTasks()
        {
            return Ok(_taskService.GetAllTasks());
        }

        [HttpGet("{taskId}")]
        public IActionResult GetTaskById([FromRoute] string taskId)
        {
            return Ok(_taskService.GetTaskById(new ObjectId(taskId)));
        }

        [HttpDelete("{taskId}")]
        public  IActionResult DeleteTask([FromRoute] string taskId)
        {
            _taskService.DeleteTask(new ObjectId(taskId));
            return NoContent();
        }
    }
}
