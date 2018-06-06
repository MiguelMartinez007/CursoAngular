import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { 
    console.log("Servicio listo para correr!!!");
  }
}
