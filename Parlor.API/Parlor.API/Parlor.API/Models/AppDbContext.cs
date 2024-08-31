using Microsoft.EntityFrameworkCore;

namespace Parlor.API.Models;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
}