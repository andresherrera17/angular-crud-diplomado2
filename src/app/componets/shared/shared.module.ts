import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeesFormComponent } from './employees-form/employees-form.component';



@NgModule({
  declarations: [
    NavbarComponent,
    EmployeesFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
