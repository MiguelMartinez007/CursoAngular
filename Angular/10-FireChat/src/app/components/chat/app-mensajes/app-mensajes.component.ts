import { Component, OnInit } from '@angular/core';
// --- Codigo viejo
// import { AppComponent } from '../../../app.component';
// import { Observable } from 'rxjs';

// --- Codigo nuevo
import { ChatService } from "../../../providers/chat.service";
import { Mensaje } from "../../../interface/mensaje.interface";


@Component({
  selector: 'app-app-mensajes',
  templateUrl: './app-mensajes.component.html',
  styleUrls: ['./app-mensajes.component.css']
})
export class AppMensajesComponent implements OnInit {

  // --- codigo viejo
  // public mensajes: Observable<any[]>;
  // constructor( appComponent: AppComponent ) {
  //   this.mensajes = appComponent.mensajes();
  // }


  public chats:Mensaje[] = [];
  mensaje: string = "";
  constructor( public _cs: ChatService ){
    this._cs.vargarMensajes().subscribe( (mensajes:any[])=> {
      console.log(mensajes);
      this.chats = mensajes;
    })
  }

  ngOnInit() {
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    
    if( this.mensaje.length === 0 ) {
      return;
    }

    this._cs.agregarMensajes( this.mensaje );
    this.mensaje = "";
  }

}
