namespace Parlor.API.Services.IServices;

public interface IPasswordService
{
    string HashPassword(string password);
    bool VerifyHash(string password, string hashedPassword);
}