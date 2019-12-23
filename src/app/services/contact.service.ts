import { Injectable } from '@angular/core';
import { contactData } from './contact.data';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ContactService {

  constructor() { }

  sort(arr) {
    return arr.sort((a, b) => {
      if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
        return -1;
      }
      if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
        return 1;
      }

      return 0;
    })
  }


  getContacts(filterBy = null) {
     var contacts = JSON.parse(localStorage.getItem('contacts')) 
     var contactsToReturn ;
     if(contacts) contactsToReturn = contacts
    contactsToReturn = of(contactData)
    if (filterBy && filterBy.term) {
      
      contactsToReturn = this.filter(filterBy.term)
    }
    localStorage.setItem('contacts',JSON.stringify(contactsToReturn))
    return contactsToReturn
  }

  getContactById(id) {
    return this.getContacts().pipe(
      map((contacts :any) => {
        return contacts.find((contact) => contact._id === id)
      })
    )
  }

  deleteContact(id) {
    return this.getContacts().pipe(
      map((contacts :any) => {
        const idx = contacts.findIndex((contact) => contact._id === id)
        if (idx !== -1) contacts.splice(idx, 1)
        return contacts
      })
    )
  }

  _updateContact(contact) {
    return this.getContacts().pipe(
      map((contacts :any) => {
        const idx = contacts.findIndex(c => contact._id === c._id)
        if (idx !== -1) contacts[idx] = contact
        return contact
      })
    )
  }

  _addContact(contact) {
    contact._id = this._makeId()
    return this.getContacts().subscribe((contacts) => {
      contacts.unshift(contact)
    })
  }
  saveContact(contact) {
    return contact._id ? this._updateContact(contact) : this._addContact(contact)
  }

  getEmptyContact() {
    return {
      name: '',
      email: '',
      phone: ''
    }
  }

  filter(term) {
    term = term.toLocaleLowerCase()
    var currContacts;
      this.getContacts().subscribe((contacts) => {
        currContacts = contacts
      })
    return currContacts.filter(contact => {
      return contact.name.toLocaleLowerCase().includes(term) ||
        contact.phone.toLocaleLowerCase().includes(term) ||
        contact.email.toLocaleLowerCase().includes(term)
    })
  }



  _makeId(length = 10) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }
}
