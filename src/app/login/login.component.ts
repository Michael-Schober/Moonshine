import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private serv: ApiService) { }

  public name: string;

  loginForm = new FormGroup
    ({
      username: new FormControl(),
      password: new FormControl(),
    });

  Login()
  {
    this.serv.obtainAccessToken();
  }

  DisplayData()
  {
    this.serv.getResource('localhost:8082/spring-security-oauth-resource/tet').subscribe(data =>
      {
        this.name = data.name;
      });
  }
}
