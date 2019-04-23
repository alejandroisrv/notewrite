import { Injectable } from '@angular/core'
import { AlertController, NavController } from '@ionic/angular';

@Injectable()
export class alertServices{

    constructor(public alertController: AlertController, private navCtrl: NavController){}
    async presentAlert(titulo: string, contenido: string) {
        const alert = await this.alertController.create({
          header: titulo,
          message: contenido,
          buttons: ['Continuar']
        });
        await alert.present();
    
      }
}