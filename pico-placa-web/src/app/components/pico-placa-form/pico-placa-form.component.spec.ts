import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicoPlacaFormComponent } from './pico-placa-form.component';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

describe('PicoPlacaFormComponent', () => {
  let component: PicoPlacaFormComponent;
  let fixture: ComponentFixture<PicoPlacaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PicoPlacaFormComponent], imports: [FormsModule]
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

  it(`DOM element with class .card should have a child tag with class .row`, () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const cardTag = compiled.query(By.css('.card')).nativeElement;
    expect(cardTag.querySelector('.row')).toBeTruthy();
  });

  it(`should have @ViewChild NgForm attribute referenced from the DOM`, () => {
    fixture.detectChanges();
    const frm = fixture.componentInstance.form;
    expect(frm).toBeDefined();
  });

  it(`should have picoPlaca attribute defined`, () => {
    fixture.detectChanges();
    expect(fixture.componentInstance.picoPlaca).toBeDefined();
  });

  it(`should have input element with id #plateNumber`, () => {
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css("input#plateNumber"));
    expect(input).toBeTruthy();
  });

  it(`should have input element with id #date`, () => {
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css("input#date"));
    expect(input).toBeTruthy();
  });

  it(`should have input element with id #time`, () => {
    fixture.detectChanges();
    let input = fixture.debugElement.query(By.css("input#time"));
    expect(input).toBeTruthy();
  });

});
