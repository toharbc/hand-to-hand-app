import { TestBed } from '@angular/core/testing';

import { VolunteeringForUsersService } from './volunteering-for-users.service';

describe('VolunteeringForUsersService', () => {
  let service: VolunteeringForUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolunteeringForUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
