import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivatePageComponent } from './componentes/private-page/private-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import {Routes,RouterModule} from '@angular/router';
import { AuthService } from './servicio/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { NavbarComponent } from './componentes/navbar/navbar.component';


const appRoutes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginPageComponent},
  {path:'registrar',component:RegisterPageComponent},
  {path:'privado',component:PrivatePageComponent,canActivate: [AuthGuard]},
  {path:'**',component:NotFoundPageComponent},
];

export const firebaseConfig = {
  apiKey: "AIzaSyAcKYnx4Qej4UE9HGXcWGpAla-ZEh8mj5I",
  authDomain: "angularlogin-ef26d.firebaseapp.com",
  databaseURL: "https://angularlogin-ef26d.firebaseio.com",
  projectId: "angularlogin-ef26d",
  storageBucket: "angularlogin-ef26d.appspot.com",
  messagingSenderId: "657716599461"
};

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivatePageComponent,
    NotFoundPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFirestoreModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    
    ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
