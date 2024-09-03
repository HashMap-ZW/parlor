using Parlor.API.Models.Data;

namespace Parlor.API.Services.IServices;

public interface IJwtService
{
    Task<string> GenerateTokenAsync(Account account);
}