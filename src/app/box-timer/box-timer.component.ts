import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-box-timer',
  templateUrl: './box-timer.component.html',
  styleUrls: ['./box-timer.component.scss'],
})
export class BoxTimerComponent implements OnInit {
  intervalSubscription!: Subscription;
  active = false;
  showPopup = false;

  private _currentTime: number = 0;
  set currentTime(time: number) {
    this._currentTime = time;
    this.time.hour = Math.floor(this.currentTime / 3600)
      .toString()
      .padStart(2, '0');
    this.time.minute = Math.floor((this.currentTime % 3600) / 60)
      .toString()
      .padStart(2, '0');
    this.time.second = (this.currentTime % 60).toString().padStart(2, '0');
  }

  get currentTime(): number {
    return this._currentTime;
  }

  time = {
    hour: '00',
    minute: '00',
    second: '00',
  };

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.showPopup = true;
    this.currentTime = 0;
    this.intervalSubscription = interval(1000).subscribe(() => {
      this.active = true;
      this.currentTime++;
    });
  }

  onStop() {
    this.intervalSubscription.unsubscribe();
    this.active = false;
  }

  onReset() {
    this.currentTime = 0;
    this.onStop();
  }

  clearTime() {
    this.currentTime = 0;
    this.time = {
      hour: '00',
      minute: '00',
      second: '00',
    };
  }
}
