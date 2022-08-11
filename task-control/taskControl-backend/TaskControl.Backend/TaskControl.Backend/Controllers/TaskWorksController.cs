using Microsoft.AspNetCore.Mvc;

namespace TaskControl.Backend.Controllers
{
    [ApiController]
    [Route("TaskWorks")]
    public class TaskWorksController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            var taskWorks = "Task Works!";
            
            return Ok(taskWorks);
        }
    }
}
