import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { Appointment } from '../Services/responeTypes';
import { AppPage } from 'e2e/src/app.po';

@Component({
  selector: 'app-appointment-view',
  templateUrl: './appointment-view.component.html',
  styleUrls: ['./appointment-view.component.css']
})
export class AppointmentViewComponent implements OnInit, OnChanges {

  @Output() appSelect = new EventEmitter();
  @Input() createdApp: Appointment

  public appointments: Array<Appointment> = new Array<Appointment>();

  constructor(private serv: ApiService)
  {
    
  }

  ngOnInit() {  }
  ngOnChanges() { if(this.createdApp != null) {this.appointments.push(this.createdApp) } }

  appointmentSelected(data: Appointment) { this.appSelect.emit(data); }

}
