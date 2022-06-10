import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';
import { elementAt } from 'rxjs';
import { AuthService } from '../Auth.service';

@Component({
  selector: 'employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent implements OnInit {


  constructor(private auth: AuthService, private router: Router) {

  }
  ngOnInit(): void { }

  IsLogin = false;

  loginUser(data: any) {

    this.IsLogin = this.auth.login(data.name, data.password)

    if (this.IsLogin === true) {
      // console.log("this.router", this.router)
      this.router.navigateByUrl("/employeeleaves");
      alert("You have been login Successfully")
    }
    else {
      // console.log("Login Failed")
      alert(" Login Failed")
    }
  }
}
