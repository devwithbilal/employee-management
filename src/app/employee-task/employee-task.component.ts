import { Component, OnInit } from '@angular/core';
import { identity } from 'rxjs';
import { EmployeeLeaves } from '../core/models/employee-leaves';
import { EmployeeTask } from '../core/models/employee-task';

@Component({
  selector: 'employee-task',
  templateUrl: './employee-task.component.html',
  styleUrls: ['./employee-task.component.css']
})




export class EmployeeTaskComponent implements OnInit {

  employeetask : EmployeeTask[] = [];
  indentity: number =1;
  id: number =105;
  userName: string = "bilal";
  createdAt: number = Date.now();


  constructor() {
   }

  ngOnInit(): void {

  }

  // setEmployeeTask(){
  //     let employeetasks : EmployeeTask{
  //       id: 105,
  //       userName: bilal,
  //       createdAt: createdAt
  //     }

    

  



}




