import { Component, OnInit } from '@angular/core';
import { EmployeeLeaves } from '../core/models/employee-leaves';

@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.css']
})
export class EmployeeLeavesComponent implements OnInit {

  employeeLeaves : EmployeeLeaves[] = [];
  indentity: number = 1;
  constructor() { }

  ngOnInit(): void {
    this.setEmployeeLeaves("Bilal", 10, 25);
    this.setEmployeeLeaves("Ali",5,25);
    this.setEmployeeLeaves("Kashan", 15,25);
    console.log("employeeLeave", this.employeeLeaves)
  }

  setEmployeeLeaves(userName: string, consumeLeaves: number, totalLeaves: number){
    let employeeLeave : EmployeeLeaves = {
      consumeLeaves : consumeLeaves,
      totalLeaves : totalLeaves,
      remainingLeaves : totalLeaves - consumeLeaves,
      userName : userName,
      id : this.indentity
    }
    this.employeeLeaves.push(employeeLeave);
    this.indentity++;
  }



}
