import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicoPlacaAlertComponent } from './pico-placa-alert.component';

describe('PicoPlacaAlertComponent', () => {
  let component: PicoPlacaAlertComponent;
  let fixture: ComponentFixture<PicoPlacaAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicoPlacaAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicoPlacaAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
