using Microsoft.EntityFrameworkCore;
using Parlor.API.Models.Data;
using Parlor.API.Models.Local;
using Parlor.API.Models.Repository.IRepository;
using Parlor.API.Services.IServices;

namespace Parlor.API.Models.Repository;

public class AccountRepository(AppDbContext context, IConfiguration configuration, IPasswordService passwordService, IJwtService jwtService, IOtpService otpService, IEmailService emailService) : IAccountRepository
{
    private readonly AppDbContext _context = context;
    private readonly IConfiguration _configuration = configuration;
    private readonly IPasswordService _passwordService = passwordService;
    private readonly IJwtService _jwtService = jwtService;
    private readonly IOtpService _otpService = otpService;
    private readonly IEmailService _emailService = emailService;

    //public Task<Result<Account>> ChangePasswordAsync(ChangePasswordRequest changePasswordRequest)
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<Result<Account>> ConfirmAccountAsync(ConfirmAccountRequest confirmAccountRequest)
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<Result<string>> GetResetPasswordCodeAsync(string email)
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<Result<Account>> LoginAsync(LoginRequest request)
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<Result<string>> ResendOtpAsync(string email)
    //{
    //    throw new NotImplementedException();
    //}

    //public Task<Result<Account>> ResetPasswordAsync(ResetPasswordRequest resetPasswordRequest)
    //{
    //    throw new NotImplementedException();
    //}
    public async Task<Result<Account>> AddAsync(Account account)
    {
        try
        {
            if (!IsUniqueUser(account.Email!))
                return new Result<Account>(false, "An account with that email already exists!");

            account.Password = _passwordService.HashPassword(account.Password!);

            await _context.Accounts!.AddAsync(account);

            var code = await _otpService.GenerateOtpCode();

            await _context.OtpCodes!.AddAsync(new OtpCode
            {
                Code = code,
                UserEmail = account.Email,
                DateCreated = DateTime.Now
            });

            //await _emailService.SendEmailAsync(new EmailRequest
            //{
            //    To = account.Email,
            //    Subject = _configuration["EmailService:ConfirmAccountSubject"],
            //    Body = string.Format(_configuration["EmailService:ConfirmAccountBody"], account.FirstName, code)
            //});

            await _context.SaveChangesAsync();

            return new Result<Account>(account, "Account created successfully!");
        }
        catch (Exception ex)
        {
            return new Result<Account>(false, ex.ToString());
        }
    }

    private bool IsUniqueUser(string email)
    {
        var user = _context.Accounts!.SingleOrDefault(x => x.Email == email);

        if (user == null) return true;
        return false;
    }
}