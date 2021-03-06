import { Component, OnInit } from '@angular/core';
import { NotasServices } from 'src/services/notas.services';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { alertServices } from 'src/services/alert.services';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  


  id = null;
  user = null;

  nota: any  = {id:null,titulo:null,descripcion:null,fecha:null};
  

  constructor(public navCttrl: NavController ,public notaService: NotasServices , public alertServices: alertServices , navCtrl : NavController,private activateRoute: ActivatedRoute) { 
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.user = this.activateRoute.snapshot.paramMap.get('user');
    notaService.getNota(this.id,this.user)
    .valueChanges().subscribe( nota => {
      this.nota = nota

  })
  
  }

  
  ngOnInit() {
 
  }

  editNota(){
    this.notaService.editNota(this.nota)
    this.navCttrl.navigateForward(`/addnote/${this.nota.id}/${this.nota.user}`)
  }


}
