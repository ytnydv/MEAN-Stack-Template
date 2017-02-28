import { TestBed, inject } from '@angular/core/testing';

import { JPostService } from './service.service';

describe('JPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JPostService]
    });
  });

  it('should ...', inject([JPostService], (service: JPostService) => {
    expect(service).toBeTruthy();
  }));
});
