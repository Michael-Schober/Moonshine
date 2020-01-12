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

  getAppointments(): Observable<Appointment>
  {
    return this.http.get<Appointment>("http://localhost:9150/user");
  }

  createAppointment(a: Appointment): Observable<Appointment>
  {
    return this.http.post<Appointment>("http://localhost:9155/appointment", a);
  }

}
