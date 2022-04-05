import { Component, OnInit } from '@angular/core';
import { BlockUIService } from 'ng-block-ui';
import { EmployeesService } from 'src/app/services/employees.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(
    private _employeeService: EmployeesService,
    private _blockUIService: BlockUIService,
    private _msg: MessagesService
  ) { }

  ngOnInit(): void {
  }

  addEmployee($event) {
    this._blockUIService.start('block-target', 'Agregar Empleado');
    this._employeeService.addEmployee($event)
      .then((res) => {
        this._msg.successMessage('Empleado Agregado', 'El nuevo empleado ha sido agregado satisfactoriamente');
        this._blockUIService.stop('block-target');
      })
      .catch((error) => {
        this._msg.errorMessage('Error', 'No fue posible aregar el empleado', error)
        this._blockUIService.stop('block-target');
        console.log(error);
      })
  }
}
