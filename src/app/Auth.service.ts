import { Injectable } from '@angular/core';
import { elementAt } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  users = [
    { name: "bilal", password: "12345"},
    { name: "ali", password: "12345"}
  ]
  
  login(name: string, password: string) {

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
    this.users.push({name:name , password:password})
  }


}