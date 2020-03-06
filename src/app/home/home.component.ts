import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { Shop } from '../Services/responeTypes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent
{
  constructor(private serv: ApiService,private oauth: OAuthService )
  {

  }

  loadShops(): void 
  {
    if(this.oauth.getAccessToken())
    {
      this.serv.shops = new Array<Shop>();
      this.serv.startShopStream().subscribe(data => 
        {
          this.serv.shops.push(JSON.parse(data.data))
        });
    }
  }

  
  
}
