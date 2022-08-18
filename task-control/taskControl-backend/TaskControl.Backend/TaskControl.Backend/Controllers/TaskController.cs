using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System.Threading.Tasks;
using TaskControl.Backend.Models;
using TaskControl.Backend.Services;

namespace TaskControl.Backend.Controllers
{
    [ApiController]
    [Route("TaskControl")]
    public class TaskController : Controller
    {
        // injeção de dependencias do TaskService;
        private readonly ITaskService _taskService;

        // construtor da classe;
        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }
        // fim injeção;

        [HttpPost]
        public async Task<IActionResult> CreateTask([FromBody] AddTaskModels taskModels)
        {
            return Ok(await _taskService.Create(taskModels));
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
