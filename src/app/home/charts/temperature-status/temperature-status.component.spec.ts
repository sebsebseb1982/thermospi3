import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureStatusComponent } from './temperature-status.component';

describe('TemperatureStatusComponent', () => {
  let component: TemperatureStatusComponent;
  let fixture: ComponentFixture<TemperatureStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemperatureStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
