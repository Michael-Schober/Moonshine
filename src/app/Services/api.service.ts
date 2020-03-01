import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Shop, User } from './responeTypes';
import { Observable, Observer } from 'rxjs';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';


@Injectable({
  providedIn: 'root'
})
export class ApiService
{

  constructor(private oauthService: OAuthService, private http: HttpClient) { }

  test(): Observable<any>
  {
    return this.http.get("http://37.252.191.48:9000/user?page=4&size=46");
  }

  test2(): Observable<any>
  {
    return this.http.get("http://37.252.191.48:9000/shop");
  }

  createNewShop(shop: Shop): Observable<Shop>
  {
    return this.http.post<Shop>("http://37.252.191.48:9000/shop/admin", shop);
  }
}
