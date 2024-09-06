namespace Parlor.API.Dtos
{
    public class UpdateInventoryRequestDto
    {
        public string? ItemName { get; set; }

        public string? ItemDescription { get; set; }

        public string? Category { get; set; }

        public DateTime DateCreated { get; set; } = DateTime.UtcNow;
    }
}
