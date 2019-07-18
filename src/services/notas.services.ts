import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth  } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Injectable()
export class NotasServices{

  constructor(public afDB : AngularFireDatabase, public auth : AngularFireAuth,public router : Router){
    if ( this.auth.auth.currentUser == null) {
        this.router.navigate(['/login/'])
    }
    
  }
    notas: any;
    currentUser = '';

      public getNotas(){
        
            let currentUser = this.auth.auth.currentUser.email.split('@');   
            return this.afDB.list('/notas/'+currentUser[0]);
      }

      public getAllNotes(){  
        return this.afDB.list('/notas/');
      }

      public getNota(id : number, user:string){
        return this.afDB.object('notas/'+ user +'/'+id)
      }

      public crearNota(nota){
        let currentUser = this.auth.auth.currentUser.email.split('@'); 
        nota.user = currentUser[0];
        nota.fecha = new Date().getTime();
        this.afDB.database.ref('notas/'+ currentUser[0]+'/'+nota.id).set(nota);

      }
      public deleteNota(nota){
        let currentUser = this.auth.auth.currentUser.email.split('@');  
        this.afDB.database.ref('notas/'+currentUser[0]+'/'+nota.id).remove();

      }
      public editNota(nota){

        let currentUser = this.auth.auth.currentUser.email.split('@');  
        this.afDB.database.ref('notas/'+ currentUser[0]+'/'+nota.id).set(nota);

      }
}





