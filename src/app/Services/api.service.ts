import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token, User } from './responeTypes';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';


const params = new HttpParams()
  .set("redirect_uri", "http://localhost:4200/auth")
  .set("client_id", "CodeID")
  .set("response_type", "code");
const url = "http://localhost:9000/auth/";
const resUrl = 'http://localhost:9200/';
const regUrl = 'http://localhost:9150/';


@Injectable({
  providedIn: 'root'
})
export class ApiService
{

  public logedIn = false;
  private token;

  constructor(private client: HttpClient, private kek: CookieService)
  {
    if (this.kek.check("Token"))
    {
      this.token = this.kek.get("Token");
      this.logedIn = true;
    }

  }

  // authentication
  obtainAccessCode()
  {
    window.location.href = encodeURI(url + 'oauth/authorize?' + params.toString());
  }

  obtainToken(code: string)
  {
    const paramater = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set("redirect_uri", "http://localhost:4200/auth");
    const httpOptions =
    {
      headers: new HttpHeaders()
        .set('Authorization', 'Basic Q29kZUlEOnNlY3JldA==')
    };

    this.client.post<Token>(url + 'oauth/token' + '?' + paramater.toString() , '' , httpOptions)
    .subscribe(A => this.saveToken(A));
  }

  private saveToken(t: Token)
  {
    this.token = t.access_token;
    this.logedIn = true;
    this.kek.set('Token', t.access_token);
    this.kek.set('jti', t.jti);
  }


  // Registration
  register(u: User)
  {
    this.client.post(regUrl + "register", u).subscribe();
  }
}
