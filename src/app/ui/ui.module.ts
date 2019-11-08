import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { ApiService } from '../Services/api.service';



@NgModule({
  declarations: [LayoutComponent, FooterComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ApiService],
  exports: [ LayoutComponent ]

})
export class UiModule { }
