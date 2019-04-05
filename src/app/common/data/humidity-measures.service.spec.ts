import { TestBed } from '@angular/core/testing';

import { HumidityMeasuresService } from './humidity-measures.service';

describe('HumidityMeasuresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HumidityMeasuresService = TestBed.get(HumidityMeasuresService);
    expect(service).toBeTruthy();
  });
});
