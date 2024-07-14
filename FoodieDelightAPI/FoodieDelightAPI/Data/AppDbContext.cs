using FoodieDelightAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace FoodieDelightAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Restaurants> Restaurants { get; set;}
    }
}
