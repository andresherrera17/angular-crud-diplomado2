import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from 'src/app/interfaces/employee.interface';

@Component({
  selector: 'app-employees-form',
  templateUrl: './employees-form.component.html',
  styleUrls: ['./employees-form.component.css']
})
export class EmployeesFormComponent implements OnInit {

  @Output() employee = new EventEmitter<IEmployee>();

  @Input() employeeData = {} as IEmployee;
  @Input() edit: boolean = false;

  employeeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    if (this.edit) {
      this.employeeForm.setValue(this.employeeData)
    }
  }

  buildForm() {
    this.employeeForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      startDate: ['', [Validators.required]]
    })
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }
    //funcion para guardar
    const { value } = this.employeeForm;
    this.employee.emit(value);
  }

  showWarning(controlName: string) {
    return this.employeeForm.get(controlName)!.invalid && this.employeeForm.get(controlName)!.touched;
  }

}
