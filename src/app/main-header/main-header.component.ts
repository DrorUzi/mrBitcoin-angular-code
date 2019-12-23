import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  isShow = false

  constructor() { }
  
  toggleShow() {
    this.isShow = !this.isShow
  }
  ngOnInit() {
  }

}
