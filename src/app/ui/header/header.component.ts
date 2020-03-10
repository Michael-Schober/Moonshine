import { Component, OnInit, OnChanges } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

import { OAuthService } from 'angular-oauth2-oidc';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
  private admin: boolean;

  constructor(private serv: ApiService) 
  { 

  }

  ngOnInit()
  {
    if(sessionStorage.getItem("admin")=="true") { this.admin = true; }
    else {this.admin = false}
  }
}
