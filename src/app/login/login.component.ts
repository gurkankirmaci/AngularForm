import { Component, OnInit } from '@angular/core';
import { Login } from './modals/login.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  models:Login[]=[];
  constructor( private api :AuthService,
               private router: Router) { }

  ngOnInit(): void {
    this.loginUser(event);

  }
  loginUser(event: any){
    const target = event.target
    const username=target.querySelector('#username').value
    const password =target.querySelector('#password').value
    console.log(username,password)





    this.api.getUserDetails(username,password).subscribe(

      (res:any)=>{
        localStorage.setItem('token',res.token);
        let models=localStorage.getItem("token")
        console.log(models)
        this.router.navigateByUrl('/login');
      },

      /*
         (res:JSON)=>{
        localStorage.setItem('token',JSON.stringify(res));
        localStorage.getItem("token")
        console.log(res)
        this.router.navigateByUrl('/login');
      },
      */
    )
  }

}





