import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../../services/contact.service'
import { UserService } from '../../services/user.service'
import { compileNgModule } from '@angular/compiler';


@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {
  contact = null;
  contactService: ContactService = null;
  amount = null;
  userService: UserService = null;


  constructor(private route: ActivatedRoute, contactService: ContactService, userService: UserService) {
    this.userService = userService
    this.contactService = contactService
  }
  addMove() {
    this.userService.addMove(this.contact, this.amount)
  }
  ngOnInit() {
    window.scrollTo(0, 0);
    const id = this.route.snapshot.params.id
    this.contactService.getContactById(id).subscribe((contact) => {
      this.contact = contact;
    })
  }
}
