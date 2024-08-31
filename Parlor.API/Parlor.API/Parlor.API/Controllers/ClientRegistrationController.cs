using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Parlor.API.Models.Data;
using Parlor.API.Services;

namespace Parlor.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientRegistrationController : ControllerBase
    {
        private readonly ClientRegistrationService _clientRegistrationService;

        public ClientRegistrationController(ClientRegistrationService clientRegistrationService)
        {
            _clientRegistrationService = clientRegistrationService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ClientRegistration>>> GetClients()
        {
            return Ok(await _clientRegistrationService.GetAllClients());
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ClientRegistration>> GetClient(int id)
        {
            var client = await _clientRegistrationService.GetClientById(id);
            if (client == null)
            {
                return NotFound();
            }
            return Ok(client);
        }

        [HttpPost]
        public async Task<ActionResult<ClientRegistration>> AddClient(ClientRegistration client)
        {
            var newClient = await _clientRegistrationService.AddClient(client);
            return CreatedAtAction(nameof(GetClient), new { id = newClient.Id }, newClient);
        }

        [HttpPut]
        public async Task<IActionResult> UpdateClient(int id, ClientRegistration client)
        {
            if (id != client.Id)
            {
                return BadRequest();
            }
            await _clientRegistrationService.UpdateClient(client);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteClient(int id)
        {
            await _clientRegistrationService.DeleteClient(id);
            return NoContent();
        }
    }
}
