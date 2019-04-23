import { Injectable } from '@angular/core'
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable()
export class NotasServices{

  constructor(public afDB : AngularFireDatabase){}
    notas: any;


      public getNotas(){
        return this.afDB.list('notas/')
      }
      public getNota(id : number){
        return this.afDB.object('notas/'+id)
      }

      public crearNota(nota){

        this.afDB.database.ref('notas/'+nota.id).set(nota);

        //this.notas.push(nota);

      }
      public deleteNota(nota){

        
        this.afDB.database.ref('notas/'+nota.id).remove();


      }
      public editNota(nota){

        //for(let i=0; i< this.notas.length; i++){
          //if(this.notas[i].id== nota.id){
            //this.notas[i]=nota

          //}
        //}

        this.afDB.database.ref('notas/'+nota.id).set(nota);
      }
}




