// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OAuthModule } from 'angular-oauth2-oidc';

// Custom Modules
import { UiModule } from './ui/ui.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


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
  MatCardModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentComponent } from './appointment/appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppointmentComponent
  ],
  imports: [
    UiModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,

    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:9150/', 'http://localhost:9155/'],
        sendAccessToken: true
      }
    }),


    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
