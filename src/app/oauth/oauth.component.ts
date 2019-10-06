import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-oauth',
  templateUrl: './oauth.component.html',
  styleUrls: ['./oauth.component.css']
})
export class OauthComponent implements OnInit {

  constructor(private rout: Router, private serv: ApiService) { }

  ngOnInit()
  {
    if (this.rout.url.includes("code="))
    {
      const code = this.rout.url.substring(this.rout.url.indexOf("=") + 1, this.rout.url.length);
      this.serv.obtainToken(code);
      this.rout.navigate(['/login']);
    }
  }

}
