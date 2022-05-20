import { Component, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';
import { AuthService } from '../Auth.service';

@Component({
  selector: 'employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {
  router: any;

  // loginUser(item:any)
  // {
  //   console.warn(item);
    
  // }

  constructor(private auth:AuthService ) {}

  

  ngOnInit(): void {} 

  IsLogin=false;
  
  loginUser(data:any){

    this.IsLogin = this.auth.login(data.name , data.password)

    if(this.IsLogin === true){
      console.log("login Successfully")
      alert(" You have been login Successfully")
        

                
    }
    else{
      console.log("Login Failed")

      alert(" Login Failed")

    }
  }
  

}
