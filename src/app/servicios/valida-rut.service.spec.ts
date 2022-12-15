import { TestBed } from '@angular/core/testing';

import { ValidaRutService } from './valida-rut.service';

describe('ValidaRutService', () => {
  let service: ValidaRutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ValidaRutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
