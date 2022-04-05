import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlockUIService } from 'ng-block-ui';
import { IEmployee } from 'src/app/interfaces/employee.interface';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: any = {};
  id: string = "";
  constructor(
    private router: Router,
    private _serviceEmployee: EmployeesService,
    private _blockUIService: BlockUIService
  ) {
    try {
      this.employee = this.router.getCurrentNavigation()?.extras.state;
      this.id = this.employee.id;
    } catch (e) {
      this.router.navigate(['list'])
    }

  }

  edit(evento: any) {
    debugger;
    this._blockUIService.start('block-target', 'Editando Empleado');
    this._serviceEmployee.editEmployee(this.id, evento)
      .then(() => {
        alert('Se edito el empleado exitosamente');
        this._blockUIService.stop('block-target');
        this.router.navigate(['list']);
      })
      .catch((err) => {
        this._blockUIService.stop('block-target');
        console.error(err);
      })
  }

  ngOnInit(): void {
  }

}
