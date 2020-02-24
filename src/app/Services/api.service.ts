import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs';
import { Appointment } from './responeTypes';


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

  getAppointments(): Observable<Array<Appointment>>
  {
    return this.http.get<Array<Appointment>>("http://localhost:9150/user");
  }

  createAppointment(a: Appointment): Observable<any>
  {
    return this.http.post<any>("http://localhost:9155/appointment", a);
  }

  test(): Observable<any>
  {
    return this.http.get<any>("http://37.252.191.48:9000/user");
  }

}
