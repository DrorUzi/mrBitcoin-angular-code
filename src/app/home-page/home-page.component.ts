import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
 userService : UserService = null;
 currUser = {};
  constructor(userService : UserService) {
    this.userService = userService
   }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.currUser = this.userService.getUser()
  }

}
