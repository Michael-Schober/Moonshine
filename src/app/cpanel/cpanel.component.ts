import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-cpanel',
  templateUrl: './cpanel.component.html',
  styleUrls: ['./cpanel.component.css']
})
export class CpanelComponent implements OnInit
{

  ngOnInit()
  {
    
  }

  constructor(private serv: ApiService)
  {
    
  }

  test(scope: string): boolean
  {
    return this.serv.hasScope(scope);
  }

}
