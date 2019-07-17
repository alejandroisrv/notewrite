import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  
  constructor( private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {

    this.initializeApp();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      var notificationOpenedCallback = function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      };

      window["plugins"].OneSignal
      .startInit("b7aa0525-7fd6-457b-9c9f-646b8d645585", "notas-62844")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
      
    });
  }
}
