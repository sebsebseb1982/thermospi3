import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturesOneSensorComponent } from './temperatures-one-sensor.component';

describe('TemperaturesOneSensorComponent', () => {
  let component: TemperaturesOneSensorComponent;
  let fixture: ComponentFixture<TemperaturesOneSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturesOneSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturesOneSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
