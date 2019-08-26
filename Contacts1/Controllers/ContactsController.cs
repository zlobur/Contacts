using Contacts.Model;
using Contacts.Services;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Contacts.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        IContactService _Contactservice { get; set; }
        public ContactController(IContactService Contactservice)
        {
            this._Contactservice = Contactservice;
        }

        [HttpGet]
        public Task<IEnumerable<Contact>> Get() => _Contactservice.GetListAsync();

        //GET: api/Contacts/1
        [HttpGet("{id}")]
        public Task<Contact> Get(int id)
            => _Contactservice.GetContactAsync(id);

        //POST: api/Contacts
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Contact Contact)
             => (await _Contactservice.CreateContactAsync(Contact))
                 ? (IActionResult)Created($"api/Contacts/{Contact.Id}", Contact) // HTTP 201
                 : StatusCode(500); // HTTP 500

        // PUT: api/Contacts/1
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Contact Contact)
            => (await _Contactservice.UpdateContactAsync(id, Contact))
                ? Ok()
                : StatusCode(500);

        // DELETE: api/Contacts/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
            => (await _Contactservice.DeleteContactAsync(id))
                ? (IActionResult)Ok()
                : NoContent();
    }
}