import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  employeeOffline: any = {};
  employeeOnline: any = {};
  id: string = "";

  constructor(
    private router: Router,
    private _serviceEmployee: EmployeesService
  ) {
    try {
      this.employeeOffline = this.router.getCurrentNavigation()?.extras.state;
      this.id = this.employeeOffline.id;
    } catch (e) {
      this.router.navigate(['list'])
    }

  }

  ngOnInit(): void {
    this._serviceEmployee.getEmpoyee$(this.id).subscribe(res => {
      this.employeeOnline = res;
    })
  }

}
