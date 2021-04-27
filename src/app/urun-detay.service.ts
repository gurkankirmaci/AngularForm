import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrunDetay } from './urun/urun-detay/modals/urun-detay.model';
import { HttpClient  } from '@angular/common/http';

@Injectable()
 export class UrunDetayService{
  url = 'https://60660103b8fbbd0017567e5b.mockapi.io/';
  constructor( private http : HttpClient){}

  getUrunTipler() : Observable<UrunDetay[]>{
    return this.http.get<UrunDetay[]>(this.url + 'pets');
  }

  postUrunTipler( n : UrunDetay) : Observable<UrunDetay>{
    return this.http.post<UrunDetay>(this.url + "pets", n);

  }

  putUrunTipler( b: UrunDetay) : Observable<UrunDetay> {
    return this.http.put<UrunDetay>(this.url + "pets",b );
  }
}
