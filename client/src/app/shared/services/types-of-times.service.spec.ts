import { TestBed } from '@angular/core/testing';

import { TypesOfTimesService } from './types-of-times.service';

describe('TypesOfTimesService', () => {
  let service: TypesOfTimesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypesOfTimesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
