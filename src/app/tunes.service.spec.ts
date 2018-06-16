import { TestBed, inject } from '@angular/core/testing';

import { TunesService } from './tunes.service';

describe('TunesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TunesService]
    });
  });

  it('should be created', inject([TunesService], (service: TunesService) => {
    expect(service).toBeTruthy();
  }));
});
