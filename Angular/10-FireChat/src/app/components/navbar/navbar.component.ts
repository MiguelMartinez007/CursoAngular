import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  ventana:any = {
    estado: 'min'
  }

  constructor() { }

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
