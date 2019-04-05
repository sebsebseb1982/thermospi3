import { TestBed } from '@angular/core/testing';

import { TemperatureMeasuresService } from './temperature-measures.service';

describe('TemperatureMeasuresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TemperatureMeasuresService = TestBed.get(TemperatureMeasuresService);
    expect(service).toBeTruthy();
  });
});
