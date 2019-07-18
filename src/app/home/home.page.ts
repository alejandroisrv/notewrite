import { Component, ViewChild } from '@angular/core';
import { AlertController } from '@ionic/angular'
import { NavController } from '@ionic/angular'
import { ActivatedRoute } from '@angular/router';
import { NotasServices } from 'src/services/notas.services';
import { alertServices } from 'src/services/alert.services';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('myApp') nav: NavController
  constructor(public navCtrl: NavController, public alertService: alertServices,public alertController: AlertController, public notaServicio: NotasServices) {
    notaServicio.getNotas().valueChanges().subscribe(notas => {
        this.notas = notas
    })


  }

  notas = []
  nota = {id:null,titulo:null,descripcion:null,fecha:null,user:null};
  id=null
  goToDetalle(id,user) {

    this.navCtrl.navigateForward(`/addnote/${id}/${user}`)

  }

  async presentPrompt() {
    const alert = await this.alertController.create({
      header: "Crear nota",
      inputs: [{ name: 'Nombre', placeholder: 'Nombre' },
      { name: 'Descripcion', placeholder: 'Descripcion' }],
      buttons: [{
        text: 'Cancel', role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Crear',
        handler: data => {
         this.nota.titulo = data.Nombre
         this.nota.descripcion = data.Descripcion
         this.addNota()
        }
      }
      ]
    });
    await alert.present();
  }

  newNota() {

    this.presentPrompt();
  }
  addNota(){
    this.nota.id = Date.now();
    this.notaServicio.crearNota(this.nota)

  }


}
