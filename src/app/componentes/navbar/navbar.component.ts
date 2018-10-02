import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicio/auth.service';
declare var JQuery:any;
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  public isLogin: boolean;
  public nombreUsuario: string;
  public emailUsuario: string;
  constructor(  
    public authService: AuthService 
   ) { }

  ngOnInit(){
    this.jquery_code();
    this.authService.getAuth().subscribe( auth => {
      if (auth){
        this.isLogin = true;
        this.nombreUsuario = auth.displayName;
        this.emailUsuario = auth.email;
      } else {
        this.isLogin = false;
      }
    });
   }

  onClickLogout(){
   this.authService.logout();

 }
jquery_code()
  {
    $(document).ready(function(){
      $('.tabs').tabs();
    });
        
    $(document).ready(function(){
      $('.sidenav').sidenav();
    });
    
    $('.fixed-action-btn').floatingActionButton({   
      toolbarEnabled: true,
      direction: 'left',

     });  
  }
}
