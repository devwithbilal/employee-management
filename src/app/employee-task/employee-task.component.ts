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
  allTasks: EmployeeTask[]=[];
  indentity: number = 1;
  createdAt: Date = new Date();
  Options: string[] = ["Assigned", "InProgress", "Hold", "Completed"]
  selected: string = "Assign";

  constructor() {
  }

  ngOnInit(): void {
    this.setEmployeeTask('BILAL', 'validation task', this.createdAt, 'Assigned');
    this.setEmployeeTask('ALI', 'leaves task', this.createdAt, 'InProgress');
    this.setEmployeeTask('FURQAN', 'login task', this.createdAt, 'Hold');
    this.setEmployeeTask('JAMIL', 'form task', this.createdAt, 'Completed');

  //  console.log("identity",this.indentity)
  }

  setEmployeeTask(userName: string, taskName: string, createdAt: Date, status: string, btnSave: boolean = false) {
    let employeeTask: EmployeeTask = {
      id: this.indentity,
      userName: userName,
      taskName: taskName,
      createdAt: createdAt,
      status: status,
      taskInput: false,
      btnEdit: false,
      btnSave: btnSave,
    }

    const myObject = Object.assign({}, employeeTask);
    this.employeeTasks.push(myObject);
    this.allTasks.push(employeeTask);
    this.indentity++;

  }

  onAddNewTask(allTasks: EmployeeTask) {
    this.setEmployeeTask(allTasks.userName, allTasks.taskName, allTasks.createdAt, allTasks.status,true);
    allTasks.taskInput = true;
  }

  onEdit(employeeTasks: EmployeeTask) {
    employeeTasks.taskInput = true;
    employeeTasks.btnEdit = false;
    employeeTasks.btnSave = true;
  }

  onSave(employeeTasks: EmployeeTask) {
    employeeTasks.taskInput = false;
    employeeTasks.btnEdit = true;
    employeeTasks.btnSave = false;

  }

  onCancel(employeeTasks: EmployeeTask){
    employeeTasks.taskInput = false;
    employeeTasks.btnSave = false;



  }
}













