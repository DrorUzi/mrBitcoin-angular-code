import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss']
})
export class ContactsPageComponent implements OnInit {
  contacts;
  contactService: ContactService = null;
  filterBy = {
    term: ''
  }
  constructor(contactService: ContactService) {
    this.contactService = contactService

  }
  ngOnInit() {
    this.handleFilter()
  }
  handleFilter() {
    if (this.filterBy.term === '') {
      this.contactService.getContacts().subscribe((contacts) => {
        this.contacts = contacts
      })
    } else {
      var contacts = this.contactService.getContacts(this.filterBy)
      this.contacts = contacts
    }

  }
}
