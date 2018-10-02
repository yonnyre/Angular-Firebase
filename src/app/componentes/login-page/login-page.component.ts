import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicio/auth.service';
import {Router} from '@angular/router';
declare var JQuery:any;
declare var $:any;
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
public email:string;
public password:string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
    this.jquery_code();
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
    .then( (res) => {
      this.router.navigate(['/privado']);
    }).catch((err) => {
      console.log(err);
      this.router.navigate(['/login']);
    });
  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
     .then((res) => {
         this.router.navigate(['/privado']);
     }).catch( err => console.log(err.message));
   }

  
  jquery_code()
  {
    $(document).ready(function(){
      $('.collapsible').collapsible();
    });

    $(document).ready(function(){
      $('.parallax').parallax();
    });
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });

  }
}
