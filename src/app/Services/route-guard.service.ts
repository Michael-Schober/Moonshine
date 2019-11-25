import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  helper = new JwtHelperService();

  constructor(private keks: CookieService)
  {
  }

  canActivate(): boolean
  {
    return !this.helper.isTokenExpired(this.keks.get("Token"));
  }

}
