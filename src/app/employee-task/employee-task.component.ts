import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { count, identity } from 'rxjs';
import { EmployeeLeaves } from '../core/models/employee-leaves';
import { EmployeeTask } from '../core/models/employee-task';

@Component({
  selector: 'employee-task',
  templateUrl: './employee-task.component.html',
  styleUrls: ['./employee-task.component.css']
})




export class EmployeeTaskComponent implements OnInit {

  employeeTasks: EmployeeTask[] = [];
  indentity: number = 1;
  createdAt: Date = new Date();
  Options: string[] = ["Assigned", "InProgress", "Hold", "Completed"]

  constructor() {

  }

  ngOnInit(): void {
    this.setEmployeeTask('BILAL', 'validation task', this.createdAt, 'Assigned');
    this.setEmployeeTask('ALI', 'leaves task', this.createdAt, 'InProgress');
    this.setEmployeeTask('FURQAN', 'login task', this.createdAt, 'Hold');
    this.setEmployeeTask('JAMIL', 'form task', this.createdAt, 'Completed');


    // this.employeeTasks.pop();
    // console.log("employeeTasks",this.employeeTasks)
    // console.log("employeeTasks find",this.employeeTasks.find(x=>x.userName === 'bilal'))
    // console.log("employeeTasks filter",this.employeeTasks.filter(x=>x.userName === 'bilal'))
  }

  setEmployeeTask(userName: string, taskName: string, createdAt: Date, status: string) {
    let employeeTask: EmployeeTask = {
      id: this.indentity,
      userName: userName,
      taskName: taskName,
      createdAt: createdAt,
      status: status,
      taskinput: false,
      btnshow: false,
      btnsave: false,
    }
    // this.employeeTasks.push(employeeTask)

    // console.log('employeeTasks',employeeTask);
    // console.log("employeeTasks",this.employeeTasks)



    this.employeeTasks.push(employeeTask);
    this.indentity++;

    // console.log('employeeTasks', employeeTask);
  }

  onClick(employeeTasks: EmployeeTask) {
    this.setEmployeeTask(employeeTasks.userName,employeeTasks.taskName,employeeTasks.createdAt,employeeTasks.status,);
    employeeTasks.btnshow = true;

    console.log('onClick',employeeTasks);
  }

  onEdit(employeeTasks: EmployeeTask){
    employeeTasks.taskinput = true;
    employeeTasks.btnsave = true;
    employeeTasks.btnshow = false;


  
    console.log('onEdit',employeeTasks);

  }
  onSave(employeeTasks: EmployeeTask){
    employeeTasks.taskinput = false;
    employeeTasks.btnsave = false;
    employeeTasks.btnshow = true;

  }

}




    // console.log('onClick',employeeTask);












