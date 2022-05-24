import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../../Auth.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  LocalStorageService: any;
  constructor(
    public router: Router,
    public authservice: AuthService,
  ) { }



  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


    console.log("localStorage.getItem('login')",localStorage.getItem('login'))
    if (localStorage.getItem('login')) {
      return true;
    }
    this.router.navigateByUrl('employeelogin');
    return false;
  }
}





