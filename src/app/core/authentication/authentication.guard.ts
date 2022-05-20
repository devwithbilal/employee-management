import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../Auth.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(
    public router: Router,
    public authservice:AuthService ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (AuthService.getItem('users') == null) {
      this.router.navigate(['employeeleaves']);
      console.log('AuthService'this.authservice);
      return true;
    }
    this.router.navigate(['employeelogin']);
    return false;
  }
}
