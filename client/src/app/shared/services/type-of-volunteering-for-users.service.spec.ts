import { TestBed } from '@angular/core/testing';

import { TypeOfVolunteeringForUsersService } from './type-of-volunteering-for-users.service';

describe('TypeOfVolunteeringForUsersService', () => {
  let service: TypeOfVolunteeringForUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfVolunteeringForUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
