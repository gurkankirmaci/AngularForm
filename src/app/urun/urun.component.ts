import { Component, OnInit } from '@angular/core';
import { UrunService } from '../urun.service';
import { Urun } from './modals/urun.model';
import { UrunDetay } from './urun-detay/modals/urun-detay.model';
import { UrunDetayService } from '../urun-detay.service';


@Component({
  selector: 'app-urun',
  templateUrl: './urun.component.html',
  styleUrls: ['./urun.component.css']
})
export class UrunComponent implements OnInit {
  model : Urun[] = [];
  status = true;
  yeni : Urun = new Urun();
  tipler : UrunDetay[] = [];


  constructor(
    private api : UrunService) { }

  ngOnInit(): void {
    this.getUrun();
    this.getBox();
  }

  ty(){
  this.status = false;
  }

  cancel(){
    this.status = true;
    this.yeni = new Urun();
  }

  getUrun(){
      this.api.getUrunler().subscribe(a=>{
      this.model =a;
    })
  }

  save(){
    console.log(this.yeni);
      this.api.postUrun(this.yeni).subscribe(a=>{
      this.yeni = new Urun();
      this.getUrun();
      this.status = true;
    })
  }

  edit(a : Urun){
   this.yeni = a;
   this.status = false;

  }

  update(){
    this.api.putUrun(this.yeni).subscribe(a=>{
    this.yeni = new Urun;
    this.getUrun();
    this.status = true;

    })
  }

  getBox(){
    this.api.getUrunler().subscribe(data=>{
        this.tipler=data;
    })
  }
}
