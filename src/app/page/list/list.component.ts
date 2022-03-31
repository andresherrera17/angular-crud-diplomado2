import { Component, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employes: IEmployee[] = [];

  constructor(private _serviceEmployees: EmployeesService) { }

  ngOnInit(): void {
    this._serviceEmployees.getEmployees$().subscribe({
      next: (res) => {
        this.employes = res;
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => console.info('getEmployees$ completed')
    })
  }

}
