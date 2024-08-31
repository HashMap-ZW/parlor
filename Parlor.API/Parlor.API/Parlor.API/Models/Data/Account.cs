using Parlor.API.Models.Enums;
using System.ComponentModel.DataAnnotations.Schema;

namespace Parlor.API.Models.Data;

public class Account
{
    public int Id { get; set; }
    public string? FirstName { get; set; }
    public string? LastName { get; set; }
    public string? UserName { get; set; }
    public string? Email { get; set; }
    public string? PhoneNumber { get; set; }
    public string? Password { get; set; }
    public bool IsActive { get; set; } = false;
    public Role Role { get; set; } = Role.User;
    public DateTime DateCreated { get; set; } = DateTime.Now;
    [NotMapped]
    public string? Token { get; set; }
}