import { TestBed } from '@angular/core/testing';

import { FastfoodsearchService } from './fastfoodsearch.service';

describe('FastfoodsearchService', () => {
  let service: FastfoodsearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FastfoodsearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
