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
  constructor(private oauthService: OAuthService, private http: HttpClient)
  {
    
  }

  getAppointments(): Observable<Array<Appointment>>
  {
    return this.http.get<Array<Appointment>>("localhost:9150/app");
  }

}
