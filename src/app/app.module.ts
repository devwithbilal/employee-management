import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { AuthService } from './Auth.service';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';
import { EmployeeForgotComponent } from './employee-forgot/employee-forgot.component';
import { EmployeeTaskComponent } from './employee-task/employee-task.component';
import { UserTableComponent } from './user-table/user-table.component';
import { LoginComponent } from './Account/login/login.component';
import { RegisterComponent } from './Account/register/register.component';
import { ValidateEqualModule } from 'ng-validate-equal';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeLoginComponent,
    EmployeeRegisterComponent,
    PageNotFoundComponent,
    SidenavComponent,
    EmployeeLeavesComponent,
    EmployeeForgotComponent,
    EmployeeTaskComponent,
    UserTableComponent,
    LoginComponent,
    RegisterComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSidenavModule,
    ReactiveFormsModule,
    ValidateEqualModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
