import { SafeKeyedRead } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, FormArray, Validators  } from '@angular/forms';
import { EmployeeTask } from '../core/models/employee-task';

interface userData extends EmployeeTask{}


@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {



  constructor(formbuilder:FormBuilder) { }

  ngOnInit(): void {
  }

  

}
