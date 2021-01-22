import { Component, OnInit } from '@angular/core';
// By using the selector value we can use this component any where like shown in the example by using user lsit h2 tag we have printed user list html content user list works
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.styl']
})
export class UserlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
