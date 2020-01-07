import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{

  constructor(private oauthService: OAuthService) 
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

  

}
