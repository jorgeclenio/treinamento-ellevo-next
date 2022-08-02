using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HelloWorld.Backend.Controllers
{
    [ApiController]
    [Route("hello-world")]
    public class HelloWorldController : Controller
    {
        [HttpGet]
        public IActionResult Index()
        {
            return Ok("Hello World!");
        }
    }
}
