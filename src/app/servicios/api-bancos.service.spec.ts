import { TestBed } from '@angular/core/testing';

import { ApiBancosService } from './api-bancos.service';

describe('ApiBancosService', () => {
  let service: ApiBancosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBancosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
