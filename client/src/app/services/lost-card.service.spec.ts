import { TestBed, inject } from '@angular/core/testing';

import { LostCardService } from './lost-card.service';

describe('LostCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LostCardService]
    });
  });

  it('should be created', inject([LostCardService], (service: LostCardService) => {
    expect(service).toBeTruthy();
  }));
});
