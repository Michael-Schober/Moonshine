import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../Services/api.service';
import { User } from '../Services/responeTypes';

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
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

  Login()
  {
    this.serv.obtainAccessCode();
  }

  Register()
  {
    const x = new User();
    x.username = this.loginForm.get("username").value;
    x.password = this.loginForm.get("password").value;
    this.serv.register(x);
  }


}
