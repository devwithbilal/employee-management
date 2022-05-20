import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { min } from 'rxjs';
import { EmployeeLeaves } from '../core/models/employee-leaves';

@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.css']
})
export class EmployeeLeavesComponent implements OnInit {

  employeeLeaves : EmployeeLeaves[] = [];
  allEmployeeLeaves : EmployeeLeaves[] = [];
  indentity: number = 1;
  isEdit: any; 
  data: any;


  constructor() { }

  ngOnInit(): void {
    this.setEmployeeLeaves("Bilal", 10, 25,true);
    this.setEmployeeLeaves("Ali",5,25,false);
    this.setEmployeeLeaves("Kashan", 15,25,false);
    console.log("employeeLeave", this.employeeLeaves)
    // const myClonedArray  = Object.assign([], this.allEmployeeLeaves);
    // let newArray = this.allEmployeeLeaves.slice();
    // const itemsCopy = [...newArray];
    // const allEmployeeLeaves = this.employeeLeaves.assign({} , itemsCopy);
    // this.employeeLeaves.push(...myClonedArray)
  }

  setEmployeeLeaves(userName: string, consumeLeaves: number, totalLeaves: number, isEdit: boolean){
    let employeeLeave : EmployeeLeaves = {
      consumeLeaves : consumeLeaves,
      totalLeaves : totalLeaves,
      remainingLeaves : totalLeaves - consumeLeaves,
      userName : userName,
      id : this.indentity,
      isEdit: false,
      isValid: true
    }
    const myClonedObject = Object.assign({}, employeeLeave);
    this.employeeLeaves.push(myClonedObject);
    this.allEmployeeLeaves.push(employeeLeave);
    this.indentity++;
    
  }
  onEdit(employeeLeave : EmployeeLeaves) {
    employeeLeave.isEdit = true;
  }

  onSave(item : EmployeeLeaves) {
    // item.isEdit = false;
    // const data = this.allEmployeeLeaves.find(x=>x.id === item.id) as EmployeeLeaves;
    // data.consumeLeaves = item.consumeLeaves;
    // data.isEdit = false;
    // data.totalLeaves = item.totalLeaves;
    // item.remainingLeaves = data.totalLeaves - data.consumeLeaves;
    // data.remainingLeaves = item.remainingLeaves;
    
    const data = this.allEmployeeLeaves.find(x=>x.id === item.id) as EmployeeLeaves;
    if(item.consumeLeaves > item.totalLeaves || item.consumeLeaves < data.consumeLeaves){
      console.log("YES");
      item.isValid = false;
      return;
    }
    else{
      item.isEdit = false;
      data.consumeLeaves = item.consumeLeaves;
      data.isEdit = false;
      data.totalLeaves = item.totalLeaves;
      item.remainingLeaves = data.totalLeaves - data.consumeLeaves;
      data.remainingLeaves = item.remainingLeaves;
      data.isValid = true;
      item.isValid = true;
    }
  }

  onCancel(item: EmployeeLeaves){
    const data = this.allEmployeeLeaves.find(x=>x.id === item.id) as EmployeeLeaves;
    item.consumeLeaves = data.consumeLeaves;
    item.isEdit = false;
    item.totalLeaves = data.totalLeaves;
    item.remainingLeaves = data.remainingLeaves;
  }
}
