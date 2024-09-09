using Microsoft.EntityFrameworkCore;
using Parlor.API.Dtos;
using Parlor.API.Models.Data;
using Parlor.API.Models.Repository.IRepository;

namespace Parlor.API.Models.Repository
{
    public class InventoryRepository : IInventoryRepository
    {
        private readonly AppDbContext _context;
        public InventoryRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<Inventory> CreateAsync(Inventory inventoryModel)
        {
            await _context.Inventories.AddAsync(inventoryModel);
            await _context.SaveChangesAsync();
            return inventoryModel;
        }

        public async Task<Inventory?> DeleteAsync(int id)
        {
            var inventoryModel = await _context.Inventories.FirstOrDefaultAsync(x => x.Id == id);

            if (inventoryModel == null)
            {
                return null;
            }

            _context.Inventories.Remove(inventoryModel);
            await _context.SaveChangesAsync();
            return inventoryModel;
        }

        public async Task<List<Inventory>> GetAllAsync()
        {
            return await _context.Inventories.ToListAsync();

        }

        public async Task<Inventory?> GetByIdAsync(int id)
        {
            return await _context.Inventories.FindAsync(id);
        }

        public async Task<Inventory?> UpdateAsync(int id, UpdateInventoryRequestDto inventoryDto)
        {
            var existingInventory = await _context.Inventories.FirstOrDefaultAsync(x =>x.Id == id);

            if (existingInventory == null)
            {
                return null;
            }

            existingInventory.ItemName = inventoryDto.ItemName;
            existingInventory.ItemDescription = inventoryDto.ItemDescription;
            existingInventory.Category = inventoryDto.Category;
            existingInventory.DateCreated = inventoryDto.DateCreated;

            await _context.SaveChangesAsync();

            return existingInventory;




        }
    }
}
