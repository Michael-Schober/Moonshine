import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client: HttpClient, private oauthService: OAuthService)
  {
    this.oauthService.configure({
      loginUrl: 'http://localhost:8081/spring-security-oauth-server/oauth/authorize/login',
      redirectUri: 'http://localhost:4200/',
      clientId: 'sampleClientId',
      scope: 'read',
      oidc: false
    });
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tryLogin({});
  }

  private setStuff()
  {
    this.oauthService.loginUrl = 'http://localhost:8081/spring-security-oauth-server/oauth/authorize/login';
    this.oauthService.redirectUri = window.location.origin + '/home';
    this.oauthService.clientId = 'sampleClientId';
    this.oauthService.scope = 'read';
    this.oauthService.setStorage(sessionStorage);
    this.oauthService.tryLogin({});
  }


  obtainAccessToken()
  {
    this.oauthService.initImplicitFlow();
  }

  getResource(url): Observable<Tet>
  {
    const headers  = new HttpHeaders();
    headers.append('Content-type', 'application/x-www-form-urlencoded; charset=utf-8');
    headers.append('Authorization', 'Bearer ' + this.oauthService.getAccessToken());

    return this.client.get<Tet>(url, {headers});
  }
}



export class Tet
{
  name: string;
}
