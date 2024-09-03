using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Parlor.API.Models.Data;
using Parlor.API.Models.Local;
using Parlor.API.Models.Repository.IRepository;
using Parlor.API.Utility;

namespace Parlor.API.Controllers;

[Route("api/v1/[controller]")]
[ApiController]
public class AccountController(IAccountRepository repository) : ControllerBase
{
    private readonly IAccountRepository _repository = repository;

    [HttpPost("create")]
    [ProducesResponseType(typeof(Result<Account>), StatusCodes.Status200OK)]
    public async Task<IActionResult> Post([FromBody] AccountRequest request)
    {
        var result = await _repository.AddAsync(new Account
        {
            FirstName = request.FirstName,
            LastName = request.LastName,
            Email = request.Email,
            PhoneNumber = request.PhoneNumber,
            UserName = request.UserName,
            Password = request.Password,
        });

        if (!result.Success) return BadRequest(result);

        return Ok(result);
    }

    //[HttpPost("verify")]
    //public async Task<IActionResult> ConfirmAccount(ConfirmAccountRequest request)
    //{
    //    var result = await _unitOfWork.Account.ConfirmAccountAsync(request);
    //    if (!result.Success) return BadRequest(result);

    //    return Ok(result);
    //}

    //[HttpGet("otp/resend/{email}")]
    //[ProducesResponseType(typeof(Result<string>), StatusCodes.Status200OK)]
    //public async Task<IActionResult> ResendOtp(string email)
    //{
    //    var result = await _unitOfWork.Account.ResendOtpAsync(email);
    //    if (!result.Success) return NotFound(result);

    //    return Ok(result);
    //}

    [HttpPost("login")]
    [ProducesResponseType(typeof(Result<Account>), StatusCodes.Status200OK)]
    [ProducesResponseType(typeof(Result<Account>), StatusCodes.Status403Forbidden)]
    public async Task<IActionResult> Login([FromBody] LoginRequest request)
    {
        var result = await _repository.LoginAsync(request);

        if (!result.Success)
            return StatusCode(StatusCodes.Status403Forbidden, result);

        return Ok(result);
    }

    //[HttpGet]
    //[Authorize(Roles = "SUPERADMIN")]
    //public async Task<IActionResult> Get() => Ok(await _unitOfWork.Account.GetAllAsync());

    //[HttpGet("paged")]
    //[Authorize(Roles = "SUPERADMIN")]
    //public async Task<IActionResult> GetPaged([FromQuery] Pagination pagination) => Ok(await _unitOfWork.Account.GetAllPagedAsync(pagination));

    //[HttpPost("password/change")]
    //[Authorize]
    //[ProducesResponseType(typeof(Result<Account>), StatusCodes.Status200OK)]
    //[ProducesResponseType(typeof(Result<Account>), StatusCodes.Status400BadRequest)]
    //public async Task<IActionResult> ChangePassword(ChangePasswordRequest request)
    //{
    //    var result = await _unitOfWork.Account.ChangePasswordAsync(request);
    //    if (!result.Success) return BadRequest(result);

    //    return Ok(result);
    //}

    //[HttpGet("password/reset/{email}")]
    //[ProducesResponseType(typeof(Result<string>), StatusCodes.Status200OK)]
    //[ProducesResponseType(typeof(Result<string>), StatusCodes.Status403Forbidden)]
    //[ProducesResponseType(typeof(Result<string>), StatusCodes.Status400BadRequest)]
    //public async Task<IActionResult> ResetPassword(string email)
    //{
    //    var result = await _unitOfWork.Account.GetResetPasswordCodeAsync(email);
    //    if (!result.Success) return BadRequest(result);

    //    return Ok(result);
    //}

    //[HttpPost("password/reset")]
    //[ProducesResponseType(typeof(Result<Account>), StatusCodes.Status200OK)]
    //[ProducesResponseType(typeof(Result<Account>), StatusCodes.Status403Forbidden)]
    //public async Task<IActionResult> ResetPassword(ResetPasswordRequest request)
    //{
    //    var result = await _unitOfWork.Account.ResetPasswordAsync(request);
    //    if (!result.Success) return BadRequest(result);

    //    return Ok(result);
    //}
}