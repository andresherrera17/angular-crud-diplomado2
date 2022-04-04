import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from 'src/app/interfaces/employee.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  employee: any = {};
  constructor(
    private router: Router
  ) {
    try {
      this.employee = this.router.getCurrentNavigation()?.extras.state;
    } catch (e) {
      this.router.navigate(['list'])
    }
  }

  ngOnInit(): void {
  }

}
