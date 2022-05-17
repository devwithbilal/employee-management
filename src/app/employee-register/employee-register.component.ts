import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth.service';

@Component({
  selector: 'employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.css']
})
export class EmployeeRegisterComponent implements OnInit {



  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  }

  

  registerUser(data:any){

    this.auth.register(data.yname , data.password);

      console.log(this.auth.users);

      alert(" you have been registered")
      
  }

}
