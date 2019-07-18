import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { alertServices } from '../services/alert.services';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
  
  constructor( private alertCtrl: alertServices, private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar) {

    this.initializeApp();
  }



  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if(this.platform.is('mobileweb')) {
        console.log("Platform is core or is mobile web");
      } else {
        var notificationOpenedCallback = function(jsonData) {
          this.alertCtrl.presentAlert(jsonData.notification.payload.title, jsonData.notification.payload.body);
          console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };

        window["plugins"].OneSignal
          .startInit("b7aa0525-7fd6-457b-9c9f-646b8d645585", "707351362279")
          .handleNotificationOpened(notificationOpenedCallback)
          .endInit(); 
      }
      
    });
  }
}
