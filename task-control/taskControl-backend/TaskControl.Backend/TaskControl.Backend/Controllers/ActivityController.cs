using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System.Threading.Tasks;
using TaskControl.Backend.Models;
using TaskControl.Backend.Services;

namespace ActivityControl.Backend.Controllers
{
    [ApiController]
    [Route("Activity")]
    public class ActivityController : Controller
    {
        private readonly IActivityAppService _activityService;

        public ActivityController(IActivityAppService activityService)
        {
            _activityService = activityService;
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> CreateActivity([FromBody] AddActivityModel activityModels)
        {
            return Ok(await _activityService.CreateActivity(activityModels));
        }

        [HttpGet("task/{taskId}")]
        [Authorize]
        public IActionResult GetAllActivities([FromRoute] string taskId)
        {
            return Ok(_activityService.GetAllActivities(new ObjectId(taskId)));
        }

        [HttpGet("{activityId}")]
        [Authorize]
        public IActionResult GetActivityById([FromRoute] string activityId)
        {
            return Ok(_activityService.GetActivityById(new ObjectId(activityId)));
        }

        [HttpDelete("{activityId}")]
        [Authorize]
        public IActionResult DeleteActivity([FromRoute] string activityId)
        {
            _activityService.DeleteActivity(new ObjectId(activityId));
            return NoContent();
        }

        [HttpPut("{activityId}")]
        [Authorize]
        public IActionResult UpdateActivity([FromBody] UpdateActivityModel activityModels, [FromRoute] string activityId)
        {
            return Ok(_activityService.UpdateActivity(activityModels, new ObjectId(activityId)));
        }
    }
}
