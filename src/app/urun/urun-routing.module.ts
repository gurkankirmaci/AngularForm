import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrunComponent } from './urun.component';

const routes: Routes = [{ path: '', component: UrunComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UrunRoutingModule { }
