import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UrunRoutingModule } from './urun-detay-routing.module';
import { UrunDetayComponent } from './urun-detay.component';


@NgModule({
  declarations: [UrunDetayComponent],
  imports: [
    CommonModule,
    UrunRoutingModule,
    FormsModule,
  ]
})
export class UrunModule { }
