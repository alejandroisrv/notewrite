import { Injectable } from '@angular/core'
import { AngularFireAuth  } from '@angular/fire/auth'
import { resolve } from 'url';

@Injectable({
    providedIn:'root'
})

export class AuthServices{

constructor(private authF : AngularFireAuth ){ }


login(email: string , psswd:string){

   return new Promise((resolve,rejectd ) => {
        this.authF.auth.signInWithEmailAndPassword( email,psswd).
        then(
    
            res=>  resolve(res)
        ).catch(erro => rejectd(erro))
    }

    )
 

}


}
