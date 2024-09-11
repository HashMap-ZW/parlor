using Parlor.API.Dtos;
using Parlor.API.Models.Data;

namespace Parlor.API.Mappers
{
    public static class InventoryMapper
    {
        public static InventoryDto ToInventoryDto(this Inventory inventoryModel)
        {
            return new InventoryDto
            {
                Id = inventoryModel.Id,
                ItemName = inventoryModel.ItemName,
                ItemDescription = inventoryModel.ItemDescription,
                Category = inventoryModel.Category,
                DateCreated = inventoryModel.DateCreated,
            };
        }

        public static Inventory ToInventoryFromCreateDTO(this CreateInventoryRequestDto inventoryDto)
        {
            return new Inventory
            {
                ItemName = inventoryDto.ItemName,
                ItemDescription = inventoryDto.ItemDescription,
                Category = inventoryDto.Category,
                DateCreated = inventoryDto.DateCreated,

            };


        }
    }
}
