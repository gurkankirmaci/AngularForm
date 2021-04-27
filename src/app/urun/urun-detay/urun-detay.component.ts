import { Component, OnInit } from '@angular/core';
import { UrunDetayService } from 'src/app/urun-detay.service';
import { UrunDetay } from './modals/urun-detay.model';

@Component({
  selector: 'app-urun-detay',
  templateUrl: './urun-detay.component.html',
  styleUrls: ['./urun-detay.component.css']
})
export class UrunDetayComponent implements OnInit  {
  model : UrunDetay[] = [];
  status = true;
  yeniD : UrunDetay = new UrunDetay();

constructor(private api : UrunDetayService) { }

ngOnInit(): void {

  this.getUrunTip();
}

ty(){
  this.status = false;
}

cancel(){
  this.status = true;
  this.yeniD = new UrunDetay();
}

getUrunTip(){
  this.api.getUrunTipler().subscribe(b=>{
  this.model =b;
  })
}

save(){
  console.log(this.yeniD);
  this.api.postUrunTipler(this.yeniD).subscribe(b=>{
  this.yeniD = new UrunDetay();
  this.getUrunTip();
  this.status = true;
  })
}

edit(b : UrunDetay){
  this.yeniD = b;
  this.status = false;
}

update(){
  this.api.putUrunTipler(this.yeniD).subscribe(b=>{
  this.yeniD = new UrunDetay;
  this.getUrunTip();
  this.status = true;
  })
 }
}

