import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NotasServices } from 'src/services/notas.services';
import { alertServices } from 'src/services/alert.services';


export const firebaseConfig =  {
  apiKey: "AIzaSyABlIaSxTFkCSj73wXiBfvbMvPkM4a6MWc",
  authDomain: "notas-62844.firebaseapp.com",
  databaseURL: "https://notas-62844.firebaseio.com",
  projectId: "notas-62844",
  storageBucket: "notas-62844.appspot.com",
  messagingSenderId: "707351362279"

}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, 
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    NotasServices,alertServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
