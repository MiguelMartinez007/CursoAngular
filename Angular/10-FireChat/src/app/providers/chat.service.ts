import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// importando la interfaz de los mensajes
import { Mensaje } from "../interface/mensaje.interface";


import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
// import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public usuario: any = {};

  constructor( private afs: AngularFirestore, public afAuth: AngularFireAuth ) {
    this.afAuth.authState.subscribe( user => {
      console.log( 'Estado del usuario: ', user );
      
      if( !user ) {
        return;
      }

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
      // this.usuario.photoURL = user.photoURL;
    });
  }

  login( proveedor: string ) {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.usuario = {};
    this.afAuth.auth.signOut();
  }


  // Este es el metodo que debolvera los valores del chat
  vargarMensajes() {
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha','desc').limit(10));
    return this.itemsCollection.valueChanges();
  }

  // este es el metodo donde se ingresan datos a firebase
  agregarMensajes( texto: string ) {
    // Falta el uid del usuario
    let mensaje: Mensaje = {
      nombre: 'Demo',
      mensaje: texto,
      fecha: new Date().getTime(),
      fechabaja: 'Enviado ' + new Date().getHours() + ':' + new Date().getMinutes() + ' ' + new Date().getDay() + ' de ' + new Date().getMonth() + ' ' + new Date().getFullYear()
    }

    this.itemsCollection.add( mensaje );
  }
}
