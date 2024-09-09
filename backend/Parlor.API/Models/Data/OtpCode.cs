namespace Parlor.API.Models.Data;

public class OtpCode
{
    public int Id { get; set; }
    public string? Code { get; set; }
    public string? UserEmail { get; set; }
    public DateTime DateCreated { get; set; } = DateTime.UtcNow;
}