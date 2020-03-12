import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopDetailComponent } from './shop-detail/shop-detail.component';
import { UiModule } from '../ui/ui.module';



@NgModule({
  declarations: [ShopDetailComponent],
  imports: [
    CommonModule,
    UiModule
  ],
  exports: [ShopDetailComponent]  
})
export class ShopsModule { }
