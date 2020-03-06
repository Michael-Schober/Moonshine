import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Shop, User } from './responeTypes';
import { Observable, Observer } from 'rxjs';
import {EventSourcePolyfill, OnMessageEvent} from 'ng-event-source';


@Injectable({
  providedIn: 'root'
})
export class ApiService
{

  public shops: Array<Shop> = new Array<Shop>();


  constructor(private oauthService: OAuthService, private http: HttpClient, private zone: NgZone) { }

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

  startUserStream()
  {
    return new Observable(observer => {
      const eventSource = new EventSourcePolyfill("http://37.252.191.48:9000/user", {headers:
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

  startShopStream() : Observable<OnMessageEvent>
  {
    return new Observable(observer => {
      const eventSource = new EventSourcePolyfill("http://37.252.191.48:9000/shop?page=0", {headers:
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
}
