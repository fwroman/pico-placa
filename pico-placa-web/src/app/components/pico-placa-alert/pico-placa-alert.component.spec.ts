import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicoPlacaAlertComponent } from './pico-placa-alert.component';
import { By } from '@angular/platform-browser';

describe('PicoPlacaAlertComponent', () => {
  let component: PicoPlacaAlertComponent;
  let fixture: ComponentFixture<PicoPlacaAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PicoPlacaAlertComponent]
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

  /**
   * CUSTOM TEST PROCESS
   * AUTHOR: FREDI ROMAN
   */
  it('should has alert attribute defined', () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.alert).toBeDefined();
  });

  it('should has tag with .col-12 class', () => {
    let debugElement = fixture.debugElement;
    expect(debugElement.query(By.css('.col-12'))).toBeTruthy();
  });

  it('DOM element with class .col-12 should has tag with .alert class', () => {
    let debugElement = fixture.debugElement;
    let col12Tag = debugElement.query(By.css('.col-12'));
    expect(col12Tag.query(By.css('.alert'))).toBeTruthy();
  });

  it(`should have defined 'alertTypes' attribute`, () => {
    expect(fixture.componentInstance.alertTypes).toBeDefined();
  });

  it('DOM element with class .alert should has tag h6 and hr', () => {
    let debugElement = fixture.debugElement;
    let col12Tag = debugElement.query(By.css('.col-12'));
    let alertTag = col12Tag.query(By.css('.alert')).nativeElement;
    expect(alertTag.querySelector('h6')).toBeTruthy();
    expect(alertTag.querySelector('hr')).toBeTruthy();
  });

  it(`Tag element h6 should has tag with .fa class`, () => {
    let debugElement = fixture.debugElement;
    let col12Tag = debugElement.query(By.css('.col-12'));
    let alertTag = col12Tag.query(By.css('.alert')).nativeElement;
    let h6Tag = alertTag.querySelector('h6');
    expect(h6Tag.querySelector('.fa')).toBeTruthy();
  });
});
