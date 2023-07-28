import { TestBed } from '@angular/core/testing';

import { ProductregisterService } from './productregister.service';

describe('ProductregisterService', () => {
  let service: ProductregisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductregisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
