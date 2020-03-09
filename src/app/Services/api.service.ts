import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Shop, User } from './responeTypes';
import { Observable } from 'rxjs';
import {EventSourcePolyfill, OnMessageEvent} from 'ng-event-source';
import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class ApiService
{
  
  public shops: Array<Shop> = new Array<Shop>();
  public admin: boolean = false;


  constructor(private oauthService: OAuthService, private http: HttpClient, private zone: NgZone) 
  {
    this.adminPanelActivation();  
  }

  private adminPanelActivation(): void
  {
    this.oauthService.events.subscribe(data => {
      if(data.type.includes("token_received"))
      {
        let jwtHelper = new JwtHelperService();
        if(jwtHelper.decodeToken(this.oauthService.getAccessToken()).realm_access.roles.includes("ADMIN"))
        {
          this.admin = true;
          console.log("event");
        }
      }
    });
    if(!this.admin && this.oauthService.getAccessToken())
    {
      let jwtHelper = new JwtHelperService();
        if(jwtHelper.decodeToken(this.oauthService.getAccessToken()).realm_access.roles.includes("ADMIN"))
        {
          this.admin = true;
          console.log("non event");
        }
    }
  }

  test(): Observable<any>
  {
    return this.http.get("http://37.252.191.48:9000/user");
  }

  test2(): Observable<any>
  {
    return this.http.get("http://37.252.191.48:9000/shop");
  }

  createNewShop(shop: Shop): Observable<Shop>
  {
    return this.http.post<Shop>("http://37.252.191.48:9000/shop/admin", shop);
  }

  startStream(endpoint: string, pagination: boolean, page: number, size: number): Observable<OnMessageEvent>
  {
    let url;
    if (pagination)
    {
      url = "http://37.252.191.48:9000/" + endpoint + "?" + "page=" + page + "?" + "size=" + size;
    }
    else { url = "http://37.252.191.48:9000/" + endpoint; }


    return new Observable(observer => {
      const eventSource = new EventSourcePolyfill(url, {headers:
          {Authorization: "Bearer " + sessionStorage.getItem("access_token")}});
      eventSource.onmessage = data => {
        this.zone.run(() => {
          observer.next(data);
        });
      };

      eventSource.onerror = error => {
        this.zone.run(() => {
          eventSource.close();
        });
      };
    });
  }

  startEasyStream(endpoint: string): Observable<OnMessageEvent>
  {
    return this.startStream(endpoint, false, 0, 0);
  }
}
