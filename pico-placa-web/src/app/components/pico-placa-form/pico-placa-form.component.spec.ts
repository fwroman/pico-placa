import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicoPlacaFormComponent } from './pico-placa-form.component';
import { By } from '@angular/platform-browser';

describe('PicoPlacaFormComponent', () => {
  let component: PicoPlacaFormComponent;
  let fixture: ComponentFixture<PicoPlacaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PicoPlacaFormComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicoPlacaFormComponent);
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
  it(`should have a title 'Find out whether or not you have driving allowance in Quito Now'`, () => {
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Find out whether or not you have driving allowance in Quito Now');
  });

  it(`should have a tag with class .card`, () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.card')).toBeTruthy();
  });

  it(`DOM element with class .card should have a child tag with class .card-header and the last one must have component title`, () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const cardTag = compiled.query(By.css('.card')).nativeElement;
    expect(cardTag.querySelector('.card-header').textContent).toContain('Find out whether or not you have driving allowance in Quito Now');
  });

  /*it(`DOM element with class .card should have tag with .card-header class with text inside of it`, () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const containerTag = compiled.query(By.css('.container')).nativeElement;
    const col12Tag = compiled.query(By.css('.col-12')).nativeElement;
    const cardTag = compiled.query(By.css('.card')).nativeElement;
    expect(containerTag.querySelector('.card-header')).toBeTruthy();
  });*/
});
