import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';
import { EmployeeForgotComponent } from './employee-forgot/employee-forgot.component';

const routes: Routes = [
  { path: '', component: EmployeeLoginComponent },
  { path: 'EmployeeLoginComponent', component: EmployeeLoginComponent },
  { path: 'EmployeeRegisterComponent', component: EmployeeRegisterComponent },
  { path: 'SidenavComponent', component: SidenavComponent},
  { path: 'EmployeeLeavesComponent', component: EmployeeLeavesComponent},
  { path: 'EmployeeForgotComponent', component: EmployeeForgotComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
