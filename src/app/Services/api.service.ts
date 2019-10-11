import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token, Hi, TokenCheck } from './responeTypes';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';


const params = new HttpParams()
  .set("redirect_uri", "http://localhost:4200/auth")
  .set("client_id", "CodeID")
  .set("response_type", "code");
const url = "http://localhost:9100/";
  const resUrl = 'http://localhost:9200/';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private client: HttpClient, private kek: CookieService)  
  {
    if(this.kek.check("Token"))
    {
      this.token = this.kek.get("Token");
    }
  }

  public logedIn = false;
  private token;

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
    this.kek.set('refresh', t.jti);
  }

  public read() : Observable<Hi>
  {
    const httpOptions =
    {
      headers: new HttpHeaders()
        .set('Authorization', 'Bearer ' + this.token)
    };

    return this.client.get<Hi>(resUrl + 'api/code/', httpOptions);
  }

  public getName() : Observable<TokenCheck>
  {
    const httpOptions =
    {
      headers: new HttpHeaders()
        .set('Authorization', 'Basic Q29kZUlEOnNlY3JldA==')
    }

    return this.client.get<TokenCheck>(url+'oauth/check_token?token='+this.token , httpOptions);
  }
}
