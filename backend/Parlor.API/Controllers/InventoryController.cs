using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Parlor.API.Dtos;
using Parlor.API.Mappers;
using Parlor.API.Models;
using Parlor.API.Models.Repository.IRepository;

namespace Parlor.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InventoryController : ControllerBase
    {
        private readonly AppDbContext _context;

        private readonly IInventoryRepository _inventoryRepo;
        public InventoryController(AppDbContext context, IInventoryRepository inventoryRepo)
        {
            _inventoryRepo = inventoryRepo;
            _context = context; 
        }

        [HttpGet]

        public async Task<IActionResult> GetAll()
        {
            var inventories = await _inventoryRepo.GetAllAsync();
            var inventoryDto = inventories.Select(s => s.ToInventoryDto());

            return Ok(inventoryDto);  
        }


        [HttpGet("{id}")]

        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var inventory = await _inventoryRepo.GetByIdAsync(id);

            if (inventory == null)
            {
                return NotFound();
            }

            return Ok(inventory.ToInventoryDto());
        }

        [HttpPost]

        public async Task<IActionResult> Create([FromBody] CreateInventoryRequestDto inventoryDto)
        {
            var inventoryModel = inventoryDto.ToInventoryFromCreateDTO();
            await _inventoryRepo.CreateAsync(inventoryModel);

            return Ok(inventoryModel);
        }

        [HttpPut]
        [Route("{id}")]

        public async Task<IActionResult> Update([FromRoute] int id, [FromBody] UpdateInventoryRequestDto updateDto)
        {
            var inventoryModel = await _inventoryRepo.UpdateAsync(id, updateDto);

            if (inventoryModel == null)
            {
                return NotFound();
            }

            return Ok(inventoryModel.ToInventoryDto());

        }

        [HttpDelete]
        [Route("{id}")]

        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var inventoryModel = await _inventoryRepo.DeleteAsync(id);

            if (inventoryModel == null)
            {
                return NotFound();
            }
      
            return NoContent();
        }




    }
}
