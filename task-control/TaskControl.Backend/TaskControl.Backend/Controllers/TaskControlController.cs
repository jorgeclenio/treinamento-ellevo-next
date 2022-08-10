using Microsoft.AspNetCore.Mvc;

namespace TaskControl.Backend.Controllers
{
    [ApiController]
    [Route("taskControl")]
    public class TaskControlController : ControllerBase
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok("Task Control Works...");
        }
    }
}
