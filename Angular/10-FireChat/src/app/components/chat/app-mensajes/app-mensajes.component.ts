import { Component, OnInit } from '@angular/core';
// --- Codigo viejo
// import { AppComponent } from '../../../app.component';
// import { Observable } from 'rxjs';

// --- Codigo nuevo
import { ChatService } from "../../../providers/chat.service";


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


  mensaje: string = "";
  constructor( public _cs: ChatService ){
    
  }

  ngOnInit() {
  }

  enviar_mensaje(){
    console.log(this.mensaje);
    
  }

}
