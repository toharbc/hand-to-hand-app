import { TestBed } from '@angular/core/testing';

import { DaysForVolunteerService } from './days-for-volunteer.service';

describe('DaysForVolunteerService', () => {
  let service: DaysForVolunteerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaysForVolunteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
