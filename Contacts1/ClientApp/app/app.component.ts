import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Contact } from './contact';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})
export class AppComponent implements OnInit {

    contact: Contact = new Contact();   
    contacts: Contact[];                
    tableMode: boolean = true;          

    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.loadcontacts();    
    }
    
    loadcontacts() {
        this.dataService.getContacts()
            .subscribe((data: Contact[]) => this.contacts = data);
    }
    
    save() {
        if (this.contact.id == null) {
            this.dataService.createContact(this.contact)
                .subscribe((data: Contact) => this.contacts.push(data));
        } else {
            this.dataService.updateContact(this.contact)
                .subscribe(data => this.loadcontacts());
        }
        this.cancel();
    }
    editcontact(p: Contact) {
        this.contact = p;
    }
    cancel() {
        this.contact = new Contact();
        this.tableMode = true;
    }
    delete(p: Contact) {
        this.dataService.deleteContact(p.id)
            .subscribe(data => this.loadcontacts());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}