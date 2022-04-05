import { Component, OnInit } from '@angular/core';
import { BlockUIService } from 'ng-block-ui';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _employeeService: EmployeesService,
    private _blockUIService: BlockUIService
  ) { }

  ngOnInit(): void {
  }

  addEmployee($event) {
    this._blockUIService.start('block-target', 'Agregar Empleado');
    this._employeeService.addEmployee($event)
      .then((res) => {
        this._blockUIService.stop('block-target');
        console.log('Empleado agregado', res);
      })
      .catch((error) => {
        this._blockUIService.stop('block-target');
        console.log(error);
      })
  }
}
