using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskControl.Backend.Controllers
{
    [ApiController]
    [Route("task-control")]
    public class TaskControlController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok("Task Control Works...");
        }
    }
}
