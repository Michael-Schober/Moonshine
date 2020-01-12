import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { FormGroup, FormControl } from '@angular/forms';
import { Appointment } from '../Services/responeTypes';
import { stripSummaryForJitFileSuffix } from '@angular/compiler/src/aot/util';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private oauthServ: OAuthService, private serv: ApiService)
  {

  }

  public btn = false;


  appointmentForm = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(''),
      title: new FormControl(''),
      details: new FormControl(''),
  });

  createNew()
  {
    this.btn = !this.btn;
  }

  showElements()
  {
    this.btn = !this.btn;
  }

  createNewApp()
  {
    let u = new Appointment();
    u.date = this.appointmentForm.get("date").value;
    u.details = this.appointmentForm.get("details").value;
    u.title = this.appointmentForm.get("title").value;
    this.serv.createAppointment(u).subscribe(A => console.log(A));
  }

  ngOnInit() 
  {

  }

}
