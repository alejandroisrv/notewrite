import { Component, OnInit } from '@angular/core';
import { AuthServices } from 'src/services/auth.services';
import { Router } from '@angular/router';
import { alertServices } from 'src/services/alert.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email : string 
  psswd: string 
  constructor(public authService : AuthServices , public router : Router , public alertService : alertServices) { }

  ngOnInit() {
  }
  OnSubmitLogin(){

    this.authService.login(this.email,this.psswd).then( res => {
          this.router.navigate(['/home'])
      }
    ).catch(err => this.alertService.presentAlert("Error", "Los datos son incorrectos") )

  }
  goToRegister(){
    this.router.navigate(['/register'])
  }
}
