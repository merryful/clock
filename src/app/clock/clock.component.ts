import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  currentTime = new Date();

  constructor() { }

  ngOnInit(): void {
     setInterval(() => {
      this.currentTime = new Date();
    }, 1000 );
  }
}
