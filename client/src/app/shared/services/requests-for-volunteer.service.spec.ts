import { TestBed } from '@angular/core/testing';

import { RequestsForVolunteerService } from './requests-for-volunteer.service';

describe('RequestsForVolunteerService', () => {
  let service: RequestsForVolunteerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestsForVolunteerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
