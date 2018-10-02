import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicio/auth.service';
import {Router} from '@angular/router'
declare var JQuery:any;
declare var $:any;
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
public email:string;
public password:string;

  constructor(
   public authService: AuthService,
   public router: Router

  ) { }

  ngOnInit() {
    this.jquery_code();
  }
  
  onSubmitAddUser(){
    this.authService.registerUser(this.email, this.password)
    .then( (res) =>{
      this.router.navigate(['/privado']);
    }).catch((err)=>{
      console.log(err);
    });
  }
  jquery_code()
  {
    $(document).ready(function(){
      $('.modal').modal();
    });

  }

}
