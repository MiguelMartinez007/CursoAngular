import { Component, OnInit } from '@angular/core';

import { ChatService } from "../../providers/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( public _cs: ChatService ) {
  }

  ngOnInit() {
  }

}
