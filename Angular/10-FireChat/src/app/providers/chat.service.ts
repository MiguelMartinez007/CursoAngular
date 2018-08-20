import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// importando la interfaz de los mensajes
import { Mensaje } from "../interface/mensaje.interface";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  constructor( private afs: AngularFirestore ) {
    
  }

  // Este es el metodo que debolvera los valores del chat
  vargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc').limit(5));
    return this.itemsCollection.valueChanges();
  }

  // este es el metodo donde se ingresan datos a firebase
  agregarMensajes( texto: string ) {
    // Falta el uid del usuario
    let mensaje: Mensaje = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime()
    }

    this.itemsCollection.add( mensaje );
  }
}
