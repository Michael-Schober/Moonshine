import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OauthComponent } from './oauth/oauth.component';
import { CpanelComponent } from './cpanel/cpanel.component';
import { RouteGuardService } from './Services/route-guard.service'


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'auth',
    component: OauthComponent
  },
  {
    path: 'me',
    component: CpanelComponent,
    canActivate: [RouteGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
