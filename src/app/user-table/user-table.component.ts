import { SafeKeyedRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, FormArray, Validators, AbstractControl, FormControl  } from '@angular/forms';
import { EmployeeTask } from '../core/models/employee-task';
import { UserTable } from '../core/models/user-table';

interface userData extends UserTable{
  isNew: boolean,
}


@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

  userTables: userData [] = [];
  created: Date = new Date();
  identity: number = 0 ;
  optionList: string[]= ['Assign','InProgress','Hold','Completed'];
  selected: string = "Assigning";
  userTable: FormGroup  = this.fb.group({
    tableRows: this.fb.array([])
  });
  touchedRows: any[] = [];

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    // this.setuserTable('Saad','Validation Form',this.created,'Assign');
    // this.setuserTable('Bilal','Validation Form',this.created,'In-Progress');
    // this.setuserTable('Jamil','Validation Form',this.created,'Hold');
    // this.setuserTable('Furqan','Validation Form',this.created,'Assign');
    
    // this.userTable = this.fb.group({
    //   tableRows: this.fb.array([])
    // });
    this.addRow();

  }

  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.push(this.setuserTable('','', new Date() , ''));
 
  }


  setuserTable(userName:string,userTask: string, created: Date,status:string,isNew: boolean = true,isEdit: boolean = true){ 

    this.identity++;
    return this.fb.group({
      id: [this.identity],
      userName: [userName, [Validators.required, Validators.minLength(5)]],
      userTask: [userTask, [Validators.required]],
      created: [created],
      status: [status],
      isNew: [isNew],
      isEdit:[isEdit]
      // isEdit: [isEdit]
    });

  }
  

  onSave(group: any){
    if(!group.valid){
      return
    }
    group.controls['isEdit'].setValue(false);
  }
  onCancel(index: number) {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);

  }

  onEdit(group: any){
    
    group.controls['isEdit'].setValue(true);
  }

  newTask(controls:userData){
    this.setuserTable(controls.userName, controls.userTask, new Date(), controls.status, true)
  }

  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }

  submitForm(){
    const control = this.userTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    console.log(this.touchedRows);
  }

  getGroupControls(group: any, fieldName: string) {
    let value = group.controls[fieldName].value;
    return value;
  }

  getGroupControlsitem(group: any, fieldName: string) {
    let value = group.controls[fieldName].value;
    return value %2;
  }
}

  // setuserData(userName:string,userTask: string, created: Date,status:string,isNew: boolean = false){ 
  //   let userTable : userData = {

  //     id: this.identity,
  //     userName: userName,
  //     userTask: userTask,
  //     created: created,
  //     status: status,
  //     isNew: isNew,
  //   }
  //   this.userTables.push(userTable);
  //   this.identity++;
  //   this.identity++;
  // }