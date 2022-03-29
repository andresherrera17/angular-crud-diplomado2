import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore'
import { IEmployee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(
    private _fireStore: AngularFirestore
  ) { }

  addEmployee(employee: IEmployee): Promise<DocumentReference<IEmployee>> {
    return this._fireStore.collection<IEmployee>('employees').add(employee);
  }
}
