import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-usuario',
  templateUrl: './info-usuario.component.html',
  styleUrls: ['./info-usuario.component.css']
})
export class InfoUsuarioComponent implements OnInit {

  estado: string = "oculto";

  constructor() { }

  ngOnInit() {
  }

  ocultar() {
    if( this.estado == "" ) {
      this.estado = "oculto";
    }else {
      this.estado = "";
    }
  }

}
