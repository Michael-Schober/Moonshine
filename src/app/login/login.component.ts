import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from '../Services/api.service';

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
    this.serv.obtainAccessCode();
  }

  GetData()
  {
    this.serv.read().subscribe(A => console.log(A.name));
    this.serv.getName().subscribe(A => console.log(A.user_name));
  }


}
