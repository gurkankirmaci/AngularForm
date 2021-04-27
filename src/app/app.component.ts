import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductTable';
  links =[
    {path: '/urun',icon:'list',label:'urun'},
    {path :'/urunDetay', icon:'list',label:'urunDetay'},
    {path :'/login', icon:'list',label:'login'}
  ]
}
