import { TestBed } from '@angular/core/testing';

import { TypecoderService } from './typecoder.service';

describe('TypecoderService', () => {
  let service: TypecoderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypecoderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
