using Microsoft.IdentityModel.Tokens;
using Parlor.API.Models.Data;
using Parlor.API.Services.IServices;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Parlor.API.Services;

public class JwtService(IConfiguration configuration) : IJwtService
{
    private readonly IConfiguration _configuration = configuration;

    public Task<string> GenerateTokenAsync(Account account)
    {
        var tokenHandler = new JwtSecurityTokenHandler();
        var key = Encoding.ASCII.GetBytes(_configuration["JwtService:Secret"]!);
        var tokenDescriptor = new SecurityTokenDescriptor
        {
            Subject = new ClaimsIdentity(new List<Claim>
        {
            new("Id", account.Id.ToString()),
            new(ClaimTypes.Email, account.Email!),
            new("UserName", account.UserName!),
            new(ClaimTypes.Role, account.Role.ToString()!)
        }),

            Expires = DateTime.Now.AddHours(2),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
        };

        var token = tokenHandler.CreateToken(tokenDescriptor);
        account.Token = tokenHandler.WriteToken(token);

        return Task.FromResult(account.Token);
    }
}