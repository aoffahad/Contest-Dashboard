import { TestBed } from '@angular/core/testing';

import { CodeforcesService } from './codeforces.service';

describe('CodeforcesService', () => {
  let service: CodeforcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeforcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
