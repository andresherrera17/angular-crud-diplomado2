import { Component } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @BlockUI('block-item') blockUI: NgBlockUI = {} as NgBlockUI;

  title = 'angular-crud';
}
