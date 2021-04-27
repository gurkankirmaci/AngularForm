import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'urun', loadChildren: () => import('./urun/urun.module').then(m => m.UrunModule) },
  { path: 'urunDetay', loadChildren: () => import('./urun/urun-detay/urun-detay.module').then(n => n.UrunModule) },
  { path: 'login', loadChildren:() => import('./login/login.module').then(p=>p.LoginModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
