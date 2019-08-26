import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Contact } from './contact';
 
@Injectable()
export class DataService {
 
    private url = "/api/contact";

    constructor(private http: HttpClient) {
    }

    getContacts() {
        return this.http.get(this.url);
    }

    getContact(id: number) {
        return this.http.get(this.url + '/' + id);
    }
 
    createContact(contact: Contact) {
        return this.http.post(this.url, contact);
    }

    updateContact(contact: Contact) {
        return this.http.put(this.url + '/' + contact.id, contact);
    }

    deleteContact(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}