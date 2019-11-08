import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {


  constructor(private keks: CookieService) 
  {
    const tok = keks.get("Token")
    const payload = decode(tok);

    console.log(payload);
  }

  canActivate(): boolean
  {
    return false;
  }


  

  
}
