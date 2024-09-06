namespace Parlor.API.Models.Data
{
    public class Inventory
    {
        public int Id { get; set; }

        public string? ItemName { get; set; }

        public string? ItemDescription { get; set; }

        public string? Category { get; set; }

        public DateTime DateCreated { get; set; } = DateTime.UtcNow;
    }
}
