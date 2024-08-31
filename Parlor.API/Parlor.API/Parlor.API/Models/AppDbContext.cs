using Microsoft.EntityFrameworkCore;
using Parlor.API.Models.Data;

namespace Parlor.API.Models;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public required DbSet<ClientRegistration> ClientRegistrations { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<ClientRegistration>()
          .HasKey(c => c.Id);
    }
}

