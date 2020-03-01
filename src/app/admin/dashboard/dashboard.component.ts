import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BottleService } from '../bottle.service';
import { ApiService } from 'src/app/Services/api.service';

import { Time } from '@angular/common';
import { Shop } from 'src/app/Services/responeTypes';


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
    let close = new Date('01 02 1999');
    let openTime: Time; openTime = this.NewShopForm.get("opening").value;
    let closeTime: Time; closeTime = this.NewShopForm.get("closing").value;
    let newShop: Shop = new Shop;

    close.setHours(closeTime.hours); close.setMinutes(closeTime.minutes);
    open.setHours(openTime.hours); open.setMinutes(openTime.minutes);

    newShop.opening = open;
    newShop.closing = close;
    newShop.city = this.NewShopForm.get("city").value;
    newShop.district = this.NewShopForm.get("district").value;
    newShop.name = this.NewShopForm.get("name").value;

    this.serv.createNewShop(newShop).subscribe(A => console.log(A));
  }


}
