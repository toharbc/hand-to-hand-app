import { TestBed } from '@angular/core/testing';

import { HelpRequestsService } from './help-requests.service';

describe('HelpRequestsService', () => {
  let service: HelpRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelpRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
