import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  messagesClose(): void {
    this.router.navigate([{ outlets: { popup: null }}]);
  }

}
