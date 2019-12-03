import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Token, User, Game, jwtDecoded } from './responeTypes';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


const params = new HttpParams()
  .set("redirect_uri", "http://localhost:4200/auth")
  .set("client_id", "CodeID")
  .set("response_type", "code");
const url = "http://localhost:9000/";
const regUrl = 'http://localhost:9150/';


@Injectable({
  providedIn: 'root'
})
export class ApiService
{
  public logedIn: boolean;

  private token: string;
  private decodeToken: jwtDecoded;

  constructor(private client: HttpClient, private kek: CookieService)
  {
    if (this.kek.check("Token"))
    {
      this.token = this.kek.get("Token");
      this.decodeToken = new JwtHelperService().decodeToken(this.token);
      this.logedIn = true;
    }

  }

  // authentication & Registration
  obtainAccessCode()
  {
    window.location.href = encodeURI(url + 'auth/oauth/authorize?' + params.toString());
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

    this.client.post<Token>(url + 'auth/oauth/token' + '?' + paramater.toString() , '' , httpOptions)
    .subscribe(A => this.saveToken(A));
  }

  private saveToken(t: Token)
  {
    this.token = t.access_token;
    this.decodeToken = new JwtHelperService().decodeToken(this.token);
    this.logedIn = true;
    this.kek.set('Token', t.access_token);
  }

  register(u: User)
  {
    this.client.post(url + "reg/register", u).subscribe();
  }

  hasScope(scope: string): boolean
  {
    return this.decodeToken.scope.includes(scope);
  }

  //API calls
  getGame(id: number): Observable<Game>
  {
    return this.client.get<Game>(url + '/api/game/' + id);
  }
}
