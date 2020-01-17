import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../Services/api.service';
import { User } from '../Services/responeTypes';



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
    this.serv.getAppointments().subscribe(data => console.log(data));
  }
}
