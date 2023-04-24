import { TestBed } from '@angular/core/testing';

import { FormatingService } from './formating.service';

describe('FormatingService', () => {
  let service: FormatingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
