import { TestBed } from '@angular/core/testing';

import { MponeuserService } from './mponeuser.service';

describe('MponeuserService', () => {
  let service: MponeuserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MponeuserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
