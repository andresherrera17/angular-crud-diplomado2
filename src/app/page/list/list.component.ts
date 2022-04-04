import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees: IEmployee[] = [];

  navigationExtras: NavigationExtras = {} as NavigationExtras;

  constructor(
    private _serviceEmployees: EmployeesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._serviceEmployees.getEmployees$().subscribe({
      next: (res) => {
        this.employees = res;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => console.info('getEmployees$ completed')
    })
  }

  edit(employee: IEmployee) {
    this.navigationExtras.state = employee;
    this.router.navigate(['edit'], this.navigationExtras)
  }

  view(employee: IEmployee) {
    this.navigationExtras.state = employee;
    this.router.navigate(['details'], this.navigationExtras)
  }

}
