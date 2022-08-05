using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace WebAPI_Empty.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TesteController : ControllerBase
    {
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return new string[] { "jorge", "clenio" };
        }

        [HttpGet("pessoas")]
        public ActionResult<IEnumerable<Pessoa>> GetPessoas()
        {
            return new[]
            {
                new Pessoa { Nome = "Felipe"},
                new Pessoa { Nome = "Marcos"},
                new Pessoa { Nome = "Pedro"}
            };
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }

    public class Pessoa
    {
        public string Nome { get; set; }
    }
}
