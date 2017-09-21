import { TestBed, inject } from '@angular/core/testing';

import { DamagecardService } from './damagecard.service';

describe('DamagecardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DamagecardService]
    });
  });

  it('should be created', inject([DamagecardService], (service: DamagecardService) => {
    expect(service).toBeTruthy();
  }));
});
