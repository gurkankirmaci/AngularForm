import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UrunRoutingModule } from './urun-routing.module';
import { UrunComponent } from './urun.component';


@NgModule({
  declarations: [UrunComponent],
  imports: [
    CommonModule,
    UrunRoutingModule,
    FormsModule,
  ]
})
export class UrunModule { }
