import { TestBed } from '@angular/core/testing';

import { TrousersService } from './trousers.service';

describe('TrousersService', () => {
  let service: TrousersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrousersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
