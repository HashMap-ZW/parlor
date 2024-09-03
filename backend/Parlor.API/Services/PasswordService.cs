using Parlor.API.Services.IServices;
using System.Security.Cryptography;

namespace Parlor.API.Services;

public class PasswordService : IPasswordService
{
    private const int SaltSize = 16;
    private const int HashSize = 20;

    public static string Hash(string password, int iterations)
    {
        // Generate a salt using RandomNumberGenerator
        byte[] salt = new byte[SaltSize];
        RandomNumberGenerator.Fill(salt);

        // Derive the hash using the new Rfc2898DeriveBytes constructor
        byte[] hash;
        using (var pbkdf2 = new Rfc2898DeriveBytes(password, salt, iterations, HashAlgorithmName.SHA256))
        {
            hash = pbkdf2.GetBytes(HashSize);
        }

        // Combine salt and hash
        byte[] hashBytes = new byte[SaltSize + HashSize];
        Array.Copy(salt, 0, hashBytes, 0, SaltSize);
        Array.Copy(hash, 0, hashBytes, SaltSize, HashSize);

        // Convert the combined salt and hash to a base64 string
        string base64Hash = Convert.ToBase64String(hashBytes);

        // Return the formatted hash string
        return $"$ju!137$V1${iterations}${base64Hash}";
    }

    public bool VerifyHash(string password, string hashedPassword)
    {
        // Split the hashed password to extract iterations and the base64 hash
        var splittedHashString = hashedPassword.Replace("$ju!137$V1$", "").Split('$');
        var iterations = int.Parse(splittedHashString[0]);
        var base64Hash = splittedHashString[1];

        // Convert the base64 string back to bytes
        var hashBytes = Convert.FromBase64String(base64Hash);

        // Extract the salt from the hashBytes array
        var salt = new byte[SaltSize];
        Array.Copy(hashBytes, 0, salt, 0, SaltSize);

        // Derive the hash using the password and extracted salt
        byte[] computedHash;
        using (var pbkdf2 = new Rfc2898DeriveBytes(password, salt, iterations, HashAlgorithmName.SHA256))
        {
            computedHash = pbkdf2.GetBytes(HashSize);
        }

        // Compare the computed hash with the stored hash
        for (var i = 0; i < HashSize; i++)
        {
            if (hashBytes[i + SaltSize] != computedHash[i])
                return false; // Hashes don't match
        }

        return true; // Hashes match
    }

    public string HashPassword(string password)
    {
        return Hash(password, 10000);
    }
}