import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { encode } from 'punycode';


const params = new HttpParams()
  .set("redirect_uri","http://localhost:4200/")
  .set("client_id","CodeID")
  .set("grant_type","authorization_code")
  .set("response_type","code")

const url:string = "http://localhost:9100/"


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private client: HttpClient)
  {

  }
  

  obtainAccessToken()
  {
     
    window.open(encodeURI(url+"oauth/authorize/"+params.toString()));
  }
  
}
