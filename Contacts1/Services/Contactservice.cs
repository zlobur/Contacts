using Contacts.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contacts.Services
{
    public class ContactService : IContactService
    {
        private readonly ContactContext _context;
        public ContactService(ContactContext context)
        {
            this._context = context;
        }

        public async Task<bool> CreateContactAsync(Contact Contact)
        {
            _context.Contacts.Add(Contact);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<bool> DeleteContactAsync(int id)
        {
            var Contact = await _context.Contacts.SingleOrDefaultAsync(b => b.Id == id);
            if (Contact == null)
            {
                return false;
            }

            _context.Contacts.Remove(Contact);
            return await _context.SaveChangesAsync() > 0;
        }

        public async Task<Contact> GetContactAsync(int id)
        {
            return await _context.Contacts.SingleOrDefaultAsync(m => m.Id == id);
        }

        public async Task<IEnumerable<Contact>> GetListAsync()
        {
            return await _context.Contacts.ToListAsync();
        }

        public async Task<bool> UpdateContactAsync(int id, Contact Contact)
        {
            _context.Entry(Contact).State = EntityState.Modified;
            return await _context.SaveChangesAsync() > 0;

        }
    }
}
