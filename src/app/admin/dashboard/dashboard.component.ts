import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BottleService } from '../bottle.service';
import { ApiService } from 'src/app/Services/api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent{

  constructor(private col: BottleService, private serv: ApiService) {  }

  NewShopForm = new FormGroup({
    name: new FormControl(''),
    opening: new FormControl(''),
    closing: new FormControl(''),
    city: new FormControl(''),
    district: new FormControl('')
  });



  createNewShop()
  {
    let open = new Date('01 02 1999');
    console.log(open);

  }


}
