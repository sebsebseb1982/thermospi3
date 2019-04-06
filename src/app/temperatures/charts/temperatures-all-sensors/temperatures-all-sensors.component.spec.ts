import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperaturesAllSensorsComponent } from './temperatures-all-sensors.component';

describe('TemperaturesAllSensorsComponent', () => {
  let component: TemperaturesAllSensorsComponent;
  let fixture: ComponentFixture<TemperaturesAllSensorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperaturesAllSensorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperaturesAllSensorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
