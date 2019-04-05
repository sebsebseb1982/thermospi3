import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityStatusComponent } from './humidity-status.component';

describe('HumidityStatusComponent', () => {
  let component: HumidityStatusComponent;
  let fixture: ComponentFixture<HumidityStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumidityStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
