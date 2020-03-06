import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';

// Material
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTableModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDatepickerModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule,
  MatNativeDateModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottleService } from './bottle.service';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UiModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatNativeDateModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule
  ],
  exports: [DashboardComponent],
  providers: [BottleService]
})
export class AdminModule { }
