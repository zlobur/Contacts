using Contacts.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Contacts.Services
{
    public interface IContactService
    {
        Task<bool> CreateContactAsync(Contact Contact);
        Task<Contact> GetContactAsync(int id);
        Task<bool> UpdateContactAsync(int id, Contact Contact);
        Task<bool> DeleteContactAsync(int id);
        Task<IEnumerable<Contact>> GetListAsync();
    }
}
