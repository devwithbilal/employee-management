import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth.service';
import { User } from '../core/models/user';

@Component({
  selector: 'employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})

export class EmployeeRegisterComponent implements OnInit {
  designation: string[]=[ 'Admin','Manager','Employee']
  // emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  users : User[] = [];
  accessUsersKey: string = "registerUser";
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  

  registerUser(data:any){

    this.auth.register(data.name , data.password);
      console.log(this.auth.users);
      alert(" you have been registered")
      
  }

}
