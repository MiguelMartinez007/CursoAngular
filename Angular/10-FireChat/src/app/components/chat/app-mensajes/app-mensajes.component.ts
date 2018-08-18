import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../../app.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-app-mensajes',
  templateUrl: './app-mensajes.component.html',
  styleUrls: ['./app-mensajes.component.css']
})
export class AppMensajesComponent implements OnInit {

  public mensajes: Observable<any[]>;
  constructor( appComponent: AppComponent ) {
    this.mensajes = appComponent.mensajes();
  }

  ngOnInit() {
  }

}
