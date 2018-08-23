import { Component, OnInit } from '@angular/core';
import { ChatService } from "../../providers/chat.service";

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.component.html',
  styleUrls: ['./login-registro.component.css']
})
export class LoginRegistroComponent implements OnInit {

  constructor( public _cs: ChatService ) { }

  ngOnInit() {
  }

  ingresar( proveedor: string ) {
    console.log(proveedor);

    this._cs.login( proveedor );
  }

}
