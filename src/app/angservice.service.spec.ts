import { TestBed } from '@angular/core/testing';

import { AngserviceService } from './angservice.service';

describe('AngserviceService', () => {
  let service: AngserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
