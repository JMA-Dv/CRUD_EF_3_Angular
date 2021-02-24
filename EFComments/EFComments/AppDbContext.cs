using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EFComments.Models;
using Microsoft.EntityFrameworkCore;

namespace EFComments
{
    public class AppDbContext : DbContext
    {
        public DbSet<Comment> Comment {get; set;}

        public AppDbContext()
        {

        }
        public AppDbContext(DbContextOptions options): base(options)
        {

        }
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {

                optionsBuilder.UseSqlServer("Data Source=(localdb)\\MSSQLLocalDB; Initial Catalog=EFComments");
            }
            
        }
    }
}
