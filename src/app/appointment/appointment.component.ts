import { Component, OnInit, Input, OnChanges, Output } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { FormGroup, FormControl } from '@angular/forms';
import { Appointment } from '../Services/responeTypes';
import { ApiService } from '../Services/api.service';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent 
{
  public btn = true;
  public createdApp: Appointment;
  appointmentForm = new FormGroup({
      id: new FormControl(''),
      date: new FormControl(''),
      title: new FormControl(''),
      details: new FormControl(''),
  });

  constructor(private oauthServ: OAuthService, private serv: ApiService) { }

  showElements()  { this.btn = !this.btn; }

  createNewApp()
  {
    let u = new Appointment();
    u.ap_id = this.appointmentForm.get("id").value;
    u.date = this.appointmentForm.get("date").value;
    u.details = this.appointmentForm.get("details").value;
    u.title = this.appointmentForm.get("title").value;
    this.serv.createAppointment(u).subscribe(A => this.createdApp = A);
  }

  appSelected($event)
  {
    let u: Appointment = $event;
    this.appointmentForm.setValue({id: u.ap_id, date: u.date, details: u.details, title: u.title});
  }

  flush()
  {
    this.appointmentForm.setValue({id: null, date: null, details: null, title:null});
  }
}
