import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './login/modals/login.model';

@Injectable()
 export class LoginService{
  url = 'http://192.168.1.105:6565/api/auth/';
  constructor( private http : HttpClient){}

  /*
  onlogin(credentials: { username: any; password: any; }): Observable<any> {
    return this.http.post(this.url + 'login', {
      username: credentials.username,
      password: credentials.password
    });
  }
*/
}

