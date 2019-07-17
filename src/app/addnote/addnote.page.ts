import { Component, OnInit } from '@angular/core';
import { NotasServices } from 'src/services/notas.services';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {
  
  id = null;
  

  nota: any  = {id:null,titulo:null,descripcion:null};
  

  constructor(public navCttrl: NavController ,public notaService: NotasServices, private activateRoute: ActivatedRoute) { 
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    notaService.getNota( this.id).valueChanges().subscribe( nota => {
      this.nota = nota

  })
  
  } 
  goToEdit(id) {

    this.navCttrl.navigateForward(`/detalle/${id}`)

  }

  deleteNota(){
    this.notaService.deleteNota(this.nota)
    this.navCttrl.navigateForward('/home')
  }
  ngOnInit() {
  }

  
}
