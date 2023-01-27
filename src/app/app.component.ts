import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isTimer : boolean = false;

  constructor() {
  }

  switchToTimer() {
    this.isTimer = true;
  }

  switchToClock() {
    this.isTimer = false;
  }

}
