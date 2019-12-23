import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service'
import { compileNgModule } from '@angular/compiler';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact = null;
  contactService: ContactService = null;
  amount = null;
  constructor(private route: ActivatedRoute, contactService: ContactService) {
    this.contactService = contactService
  }
  ngOnInit() {
    const id = this.route.snapshot.params.id
    if(id){
      this.contactService.getContactById(id).subscribe((contact) => {
        this.contact = contact;
      })
    }else {
      const contact = this.contactService.getEmptyContact()
      this.contact = contact;
    } 
    window.scrollTo(0, 0);
    
  }
  saveContact(ev) {
    ev.preventDefault()
    this.contactService.saveContact(this.contact)
    window.history.back()
  }
  cancel(){
   window.history.back()
  }

}


