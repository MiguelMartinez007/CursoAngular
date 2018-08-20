import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from "@angular/forms";

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SubmenuComponent } from './components/submenu/submenu.component';
import { ChatComponent } from './components/chat/chat.component';
import { AppMensajesComponent } from './components/chat/app-mensajes/app-mensajes.component';

// servicios
import { ChatService } from "./providers/chat.service";
import { InfoUsuarioComponent } from './components/info-usuario/info-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SubmenuComponent,
    ChatComponent,
    AppMensajesComponent,
    InfoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp( environment.firebase ),
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
