using Microsoft.AspNetCore.Mvc;

namespace TaskControl.Backend.Controllers
{
    [ApiController]
    [Route("TaskControl")]
    public class TaskWorksController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok("Task Works!");
        }
    }
}
