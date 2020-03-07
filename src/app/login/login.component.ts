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
    
  }
}
