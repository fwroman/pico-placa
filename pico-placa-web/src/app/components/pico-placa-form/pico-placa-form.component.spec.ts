import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

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

  it(`should have button element with id #submit`, () => {
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css("button#submit"));
    expect(btn).toBeTruthy();
  });

  it(`should have button with text: 'Ok'`, () => {
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css("button#submit")).nativeElement;
    expect(btn.textContent).toBe('Ok');
  });

  it(`should execute 'onSubmitProcess()' method on 'Ok' button click`, fakeAsync(() => {
    spyOn(component, 'onSubmitProcess');
    let btn = fixture.debugElement.query(By.css("button#submit")).nativeElement;
    btn.click();
    tick();
    expect(component.onSubmitProcess).toHaveBeenCalled();
  }));

  it(`input element with id #plateNumber should be required`, () => {
    let input = fixture.debugElement.query(By.css("input#plateNumber")).nativeElement;
    expect(input.required).toBeTrue();
  });

  it(`input element with id #date should be required`, () => {
    let input = fixture.debugElement.query(By.css("input#date")).nativeElement;
    expect(input.required).toBeTrue();
  });

  it(`input element with id #time should be required`, () => {
    let input = fixture.debugElement.query(By.css("input#time")).nativeElement;
    expect(input.required).toBeTrue();
  });

  it(`should have 'submittedForm' attribute defined`, () => {
    expect(fixture.componentInstance.submittedForm).toBeDefined();
  });

  it(`should have 'submittedForm' attribute equals 'true' on form submit`, () => {
    fixture.componentInstance.onSubmitProcess();
    expect(fixture.componentInstance.submittedForm).toBeTrue();
  });

  it(`input element with id #plateNumber should have a validation pattern`, () => {
    let input = fixture.debugElement.query(By.css("input#plateNumber")).nativeElement;
    expect(input.pattern).toBe('[A-Z]{3}-\\d{4}');
  });

  it(`input element with id #date should have a validation pattern`, () => {
    let input = fixture.debugElement.query(By.css("input#date")).nativeElement;
    expect(input.pattern).toBe('\\d{2}/\\d{2}/\\d{4}');
  });

  it(`input element with id #time should have a validation pattern`, () => {
    let input = fixture.debugElement.query(By.css("input#time")).nativeElement;
    expect(input.pattern).toBe('\\d{2}:\\d{2}');
  });
});
