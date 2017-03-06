import { TestBed, inject } from '@angular/core/testing';

import { WineserviceService } from './wineservice.service';

describe('WineserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WineserviceService]
    });
  });

  it('should ...', inject([WineserviceService], (service: WineserviceService) => {
    expect(service).toBeTruthy();
  }));
});
