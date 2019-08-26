using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contacts.Model
{
    public class ContactContext : DbContext
    {
        public DbSet<Contact> Contacts { get; set; }
        public ContactContext(DbContextOptions<ContactContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Contact>().HasIndex(p => p.Number)
                .IsUnique();
        }
    }
}
