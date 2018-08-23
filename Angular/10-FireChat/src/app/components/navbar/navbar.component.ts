import { Component, OnInit } from '@angular/core';

import { ChatService } from "../../providers/chat.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ventana:any = {
    estado: 'min'
  }

  constructor( public _cs: ChatService ) { }

  ngOnInit() {
  }

  cambiarEstado() {
    const estado = this.ventana.estado;
    if( estado == 'min' ) {
      this.ventana.estado = '';
    }else {
      this.ventana.estado = 'min';
    }
  }

}
