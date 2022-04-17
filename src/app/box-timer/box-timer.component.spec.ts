import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxTimerComponent } from './box-timer.component';

describe('BoxTimerComponent', () => {
  let component: BoxTimerComponent;
  let fixture: ComponentFixture<BoxTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxTimerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
