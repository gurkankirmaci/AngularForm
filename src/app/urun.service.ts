import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Urun } from './urun/modals/urun.model';
import { HttpClient  } from '@angular/common/http';

@Injectable()
 export class UrunService{
  url = 'https://60660103b8fbbd0017567e5b.mockapi.io/';
  constructor( private http : HttpClient){}

  getUrunler() : Observable<Urun[]>{
    return this.http.get<Urun[]>(this.url + 'pets');
  }

  postUrun( m : Urun) : Observable<Urun>{
    return this.http.post<Urun>(this.url + "pets", m);
  }

  putUrun( a: Urun) : Observable<Urun> {
    return this.http.put<Urun>(this.url + "pets",a );
  }

}
