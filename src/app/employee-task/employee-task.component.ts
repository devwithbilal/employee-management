import { Component, OnInit } from '@angular/core';
import { data } from 'autoprefixer';
import { count, identity } from 'rxjs';
import { EmployeeLeaves } from '../core/models/employee-leaves';
import { EmployeeTask } from '../core/models/employee-task';

interface EmployeeData extends EmployeeTask{
  isNew: boolean,
  isEdit: boolean,

}
@Component({
  selector: 'employee-task',
  templateUrl: './employee-task.component.html',
  styleUrls: ['./employee-task.component.css']
})

export class EmployeeTaskComponent implements OnInit {

  employeeTasks: EmployeeData[] = [];
  indentity: number = 1;
  newIdentity: number = -1;
  createdAt: Date = new Date();
  Options: string[] = ["Assigned", "InProgress", "Hold", "Completed"];
  selected: string = "Assign";

  constructor() {
  }

  ngOnInit(): void {
    this.setEmployeeTask('BILAL', 'validation task', this.createdAt, 'Assigned');
    this.setEmployeeTask('ALI', 'leaves task', this.createdAt, 'Assigned');
    this.setEmployeeTask('FURQAN', 'login task', this.createdAt, 'Hold');
    this.setEmployeeTask('JAMIL', 'form task', this.createdAt, 'Assigned');

  //  console.log("identity",this.indentity)
  }

  setEmployeeTask(userName: string, taskName: string, createdAt: Date, status: string, isNew: boolean = false, isEdit: boolean = false) {
    let employeeTask: EmployeeData = {
      id: !isNew ? this.indentity : this.newIdentity,
      userName: userName,
      taskName: taskName,
      createdAt: createdAt,
      status: status,
      isNew : isNew,
      isEdit : isEdit,
    }

    this.employeeTasks.push(employeeTask);
    if(!isNew){
      this.indentity++;
    }else{
      this.newIdentity--;
    }
    

  }

  onAddNewTask(employeeTask: EmployeeData) {
    this.setEmployeeTask(employeeTask.userName, "", new Date(), employeeTask.status,true,true);

  }

  onEdit(employeeTask: EmployeeData) {
    employeeTask.isEdit = true;
    employeeTask.isNew = false;
  }

  onSave(employeeTask: EmployeeData) {
    if(employeeTask.taskName === ''){
      return;
    }
    employeeTask.isEdit = false;
    employeeTask.isNew = false;
    if(employeeTask.id < 0){
      employeeTask.id = this.indentity;
      this.indentity++;
    }
    // console.log('employeeTask',employeeTask);
  }

  onCancel(employeeTask: EmployeeData){
    employeeTask.isEdit = false;
    if(employeeTask.id < 0){
      this.employeeTasks = this.employeeTasks.filter(x=>x.id !== employeeTask.id);
    }
  }
}













