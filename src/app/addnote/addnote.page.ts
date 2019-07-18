import { Component, OnInit } from '@angular/core';
import { NotasServices } from 'src/services/notas.services';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { AuthServices } from 'src/services/auth.services';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.page.html',
  styleUrls: ['./addnote.page.scss'],
})
export class AddnotePage implements OnInit {
  
  id = null;
  

  nota: any  = {id:null,titulo:null,descripcion:null,fecha:null};
  user = ''

  constructor(public navCttrl: NavController ,public notaService: NotasServices, private activateRoute: ActivatedRoute,private authService :AuthServices) { 
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    this.user = this.activateRoute.snapshot.paramMap.get('user');
    notaService.getNota(this.id,this.user).valueChanges().subscribe( nota => {
      this.nota = nota
    })
  } 
  goToEdit(id,user) {

    this.navCttrl.navigateForward(`/detalle/${id}/${user}`)

  }

  deleteNota(){
    if( this.nota.user == this.user){
      this.notaService.deleteNota(this.nota)
      this.navCttrl.navigateForward('/home')
    }
   
  }
  ngOnInit() {
  }

  
}
