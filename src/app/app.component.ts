import { Component } from '@angular/core';
import { TimerService } from './timer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isTimer : boolean = false;

  constructor(private timerService: TimerService) {
  }

  switchToTimer() {
    this.isTimer = true;
  }

  switchToClock() {
    this.isTimer = false;
  }

}
