import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _employeeService: EmployeesService
  ) { }

  ngOnInit(): void {
  }

  addEmployee($event) {
    this._employeeService.addEmployee($event)
      .then((res) => {
        console.log('Empleado agregado', res);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
