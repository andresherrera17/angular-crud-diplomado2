import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: any = {};
  constructor(
    private router: Router,
    private _serviceEmployee: EmployeesService
  ) {
    this.employee = this.router.getCurrentNavigation()?.extras.state;
    if (!this.employee?.id) {
      this.router.navigate(['list']);
    }

  }

  edit(evento: any) {
    this._serviceEmployee.editEmployee(evento)
      .then(() => {
        alert('Se edito el empleado exitosamente');
        this.router.navigate(['list']);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  ngOnInit(): void {
  }

}
