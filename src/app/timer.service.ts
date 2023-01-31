import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class TimerService {
  private _isTimerRunning = false;
  get isTimerRunning() {
    return this._isTimerRunning;
  }
  set isTimerRunning(value: boolean) {
    this._isTimerRunning = value;
  }

  private _time: number;
  set time(time: number) {
    this._time = time;
  }
  get time(): number {
    return this._time;
  }
}
