import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TimerComponent implements OnInit {
  @ViewChild('timeInput') timeInputRef: ElementRef;

  alarmSound = new Audio("./assets/interface-hint-notification.wav");

  time: number;
  timeTitle: number;
  timeInterval: any;
  isPauseActive = false;
  isStartDisabled = false;
  isPauseDisabled = false;

  constructor() { }

  preventNegative(event: any) {
    if (event.target.value < 0) {
      event.target.value = 0;
    }
  }

  startTimer() {
    if (this.time === 0) {
      this.time = this.timeInputRef.nativeElement.value * 60;
    }
    if(this.time === 0) {
      return;
    }
    this.isPauseActive = false;
    this.isStartDisabled = true;
    this.isPauseDisabled = false;
    this.timeInterval = setInterval(() => {
      this.time--;
      if (this.time === 0) {
        this.stopTimer();
        this.isPauseActive = false;
        this.alarmSound.play();
      }
    }, 1000);
    this.clearInput();
  }

  stopTimer() {
    this.isPauseActive = true;
    this.isStartDisabled = false;
    this.isPauseDisabled = true;
    clearInterval(this.timeInterval);
  }

  restartTimer() {
    this.stopTimer();
    this.time = 0;
    this.clearInput();
    this.isPauseActive = false;
  }

  formatTime(time: number) {
    if (isNaN(time)) {
      return "00:00";
    }
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  clearInput() {
    this.timeInputRef.nativeElement.value = "";
  }

  ngAfterViewInit() {
    this.time = 0;
  }

  ngOnInit() {
  }

}


