namespace Parlor.API.Models.Data;

public class ClientRegistration
{
    public int Id { get; set; } // primary key
    public string? FullName { get; set; }
    public string? NationalID { get; set; }
    public string? MobileNumber { get; set; }
    public string? PhysicalAddress { get; set; }
    public DateTime DateCreated { get; set; } = DateTime.UtcNow;
}