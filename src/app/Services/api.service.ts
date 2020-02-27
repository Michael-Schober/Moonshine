import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { Shop } from './responeTypes';


@Injectable({
  providedIn: 'root'
})
export class ApiService
{
  public logged = false;

  constructor(private oauthService: OAuthService, private http: HttpClient)
  {
    if (this.oauthService.getIdToken()) { this.logged = true; }
  }

  test(): Observable<any>
  {
    return this.http.get<any>("http://37.252.191.48:9000/shop");
  }

  createNewShop(shop: Shop): Observable<Shop>
  {
    return this.http.post<Shop>("http://37.252.191.48:9000/shop/admin", shop);
  }
}
