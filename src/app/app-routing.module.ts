import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';
import { EmployeeForgotComponent } from './employee-forgot/employee-forgot.component';
import { AuthenticationGuard } from './core/authentication/authentication.guard';
import {EmployeeTaskComponent} from './employee-task/employee-task.component';



const routes: Routes = [
  { path: '', component: EmployeeLoginComponent },
  { path: 'employeelogin', component: EmployeeLoginComponent },
  { path: 'employeeregister', component: EmployeeRegisterComponent },
  { path: 'employeeleaves', component: EmployeeLeavesComponent, canActivate: [AuthenticationGuard]},
  { path: 'employeeforgot', component: EmployeeForgotComponent},
  { path: 'employeetask', component: EmployeeTaskComponent, canActivate: [AuthenticationGuard]},

  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
