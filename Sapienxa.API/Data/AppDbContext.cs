using Microsoft.EntityFrameworkCore;
using Sapienxa.API.Models;

namespace Sapienxa.API.Data;

public class AppDbContext(DbContextOptions<AppDbContext> options) : DbContext(options)
{
    public DbSet<Lead> Leads => Set<Lead>();
}
