using Parlor.API.Dtos;
using Parlor.API.Models.Data;

namespace Parlor.API.Models.Repository.IRepository
{
    public interface IInventoryRepository
    { 
        Task<List<Inventory>> GetAllAsync();
        Task<Inventory?> GetByIdAsync(int id);

        Task<Inventory> CreateAsync(Inventory inventoryModel);

        Task<Inventory?> UpdateAsync(int id, UpdateInventoryRequestDto inventoryDto);
        
        Task<Inventory?> DeleteAsync(int id);
    }
}
