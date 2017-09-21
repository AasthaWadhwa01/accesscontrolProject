import { TestBed, inject } from '@angular/core/testing';

import { ControlAccessService } from './control-access.service';

describe('ControlAccessService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ControlAccessService]
    });
  });

  it('should be created', inject([ControlAccessService], (service: ControlAccessService) => {
    expect(service).toBeTruthy();
  }));
});
