import { Component, OnInit } from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _serviceEmployees: EmployeesService) { }

  ngOnInit(): void {
    this._serviceEmployees.getEmployees$().subscribe((data) => {
      console.log(data);
    })
  }

}
