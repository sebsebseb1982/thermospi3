import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityOneSensorComponent } from './humidity-one-sensor.component';

describe('HumidityOneSensorComponent', () => {
  let component: HumidityOneSensorComponent;
  let fixture: ComponentFixture<HumidityOneSensorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidityOneSensorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityOneSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
