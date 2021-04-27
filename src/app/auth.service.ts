import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
 export class AuthService{
  url = 'http://192.168.1.105:6565/api/auth/';
  constructor( private http : HttpClient){}

  getUserDetails(username: any,password: any):Observable<any>{
    //post these details to Api  server return  user info if correct
    return this.http.post<any>(this.url+'login',{username,password
    })
    }
  }
