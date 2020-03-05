import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';;
import { ApiService } from '../Services/api.service';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{

  constructor(private oauthService: OAuthService, private serv: ApiService)
  {

  }

  login()
  {
    this.oauthService.initLoginFlow();
  }

  logoff()
  {
    this.oauthService.logOut();
  }

  mk()
  {
   // this.serv.test().subscribe(A => console.log(A));
   // this.serv.test2().subscribe(A => console.log(A));

   this.serv.startUserStream().subscribe(A => console.log(A));
   this.serv.startShopStream().subscribe(A => console.log(A));
  }
}
