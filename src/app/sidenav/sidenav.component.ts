import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Auth.service';
import { EmployeeLoginComponent } from '../employee-login/employee-login.component';




@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  showFiller = false;


  constructor (private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    //localStorage.clear();
    localStorage.removeItem("login");
    this.router.navigateByUrl("/employeelogin");
  }





}
