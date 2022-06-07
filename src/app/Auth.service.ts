import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';
import { User } from './core/models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  users: User[] = [];
  accessUsersKey = "registerUser";
    // { name: "bilal", password: "12345"},
    // { name: "ali", password: "12345"}
  //]
  
  login(name: string, password: string) {

    this.users = JSON.parse(localStorage.getItem(this.accessUsersKey) || "[]") as User[];
    let res = this.users.find(x => x.name === name && x.password === password);
    if(res != undefined){
      localStorage.setItem("login", JSON.stringify(res))
      return true;
    }
    else{
      console.log('login false')
      return false;
    }
  }

  register(name :string , password:string){

    let users = JSON.parse(localStorage.getItem(this.accessUsersKey) || "[]") as User[];
    if(users.length === 0){
      users = [];
    }
    users.push({name:name , password:password})
    localStorage.setItem(this.accessUsersKey, JSON.stringify(users) )
  }


}