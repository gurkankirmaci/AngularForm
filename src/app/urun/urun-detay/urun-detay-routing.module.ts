import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrunDetayComponent } from './urun-detay.component';

const routes: Routes = [{ path: '', component: UrunDetayComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrunRoutingModule { }
