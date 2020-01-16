import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Appointment } from '../Services/responeTypes';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.css']
})
export class AppointmentViewComponent implements OnInit {


  public appointments: Array<Appointment>;

  constructor(private serv: ApiService)
  {
    
  }

  ngOnInit()
  {
    this.serv.getAppointments().subscribe(Data => this.appointments = Data);
  }

}
