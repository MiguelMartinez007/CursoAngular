import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private itemsCollection: AngularFirestoreCollection<any>;

  public chats:any[] = [];

  constructor( private afs: AngularFirestore ) {
    
  }

  // Este es el metodo que debolvera los valores del chat
  vargarMensajes() {
    this.itemsCollection = this.afs.collection<any>('chats');
    return this.itemsCollection.valueChanges();
  }
}
