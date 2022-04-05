import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/compat/firestore'
import { filter, map } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';
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

  editEmployee(employee: IEmployee) {
    return this._fireStore.collection<IEmployee>('employees').doc(employee.id).update(employee);
  }

  getEmployees$() {
    return this._fireStore.collection<IEmployee>('employees').snapshotChanges()
      .pipe(
        map(data => data.map(doc => {
          return {
            id: doc.payload.doc.id,
            ...doc.payload.doc.data() as IEmployee
          }
        }))
      )
  }

  getEmpoyee$(id: string) {
    return this._fireStore.collection<IEmployee>('employees').doc(id).snapshotChanges()
      .pipe(
        map(data => {
          return {
            id: data.payload.id,
            ...data.payload.data() as IEmployee
          }
        })
      )
  }


}
