import { TestBed } from '@angular/core/testing';

import { PicoPlacaService } from './pico-placa.service';
import { PicoPlaca } from '../models/pico-placa';

describe('PicoPlacaService', () => {
  let service: PicoPlacaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PicoPlacaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /**
   * CUSTOM TEST PROCESS
   * AUTHOR: FREDI ROMAN
   */
  it(`should have a method named 'canCarBeDriven' which return true`, () => {
    //let picoPlaca = new PicoPlaca(null, null, null);
    //let picoPlaca = new PicoPlaca('', '', '');
    let picoPlaca = new PicoPlaca('PTC-0603', '24/06/2020', '16:31');
    expect(service.canCarBeDriven(picoPlaca)).toBeTrue();
  })
});
