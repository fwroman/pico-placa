import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { PicoPlacaAlertComponent } from './components/pico-placa-alert/pico-placa-alert.component';
import { ElementRef } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  /**
   * CUSTOM TEST PROCESS
   * AUTHOR: FREDI ROMAN
   */
  it('should have div with .container class', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    expect(compiled.query(By.css('.container'))).toBeTruthy();
  });

  it(`should have a title 'Pico y Placa restriction for Quito city'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Pico y Placa restriction for Quito city');
  });

  it('should render the title with h2 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Pico y Placa restriction for Quito city');
  });

  it('should render hr tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('hr')).toBeTruthy();
  });

  it('should have h2 and hr tags inside tag with .container class', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const containerTag = compiled.query(By.css('.container')).nativeElement;
    expect(containerTag.querySelector('h2')).toBeTruthy();
    expect(containerTag.querySelector('hr')).toBeTruthy();
  });

  it('DOM element with class .container should have tag with .col-12 class inside of it', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const containerTag = compiled.query(By.css('.container')).nativeElement;
    expect(containerTag.querySelector('.col-12')).toBeTruthy();
  });

  it('DOM element with class .col-12 should have child component with tag pico-placa-form', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement;
    const containerTag = compiled.query(By.css('.container')).nativeElement;
    const col12Tag = compiled.query(By.css('.col-12')).nativeElement;
    expect(containerTag.querySelector('pico-placa-form')).toBeTruthy();
  });

  it(`should have a @ViewChild attribute named 'infoAlert' defined`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const infoAlert = fixture.componentInstance.infoAlert;
    expect(infoAlert).toBeDefined();
  });

  it(`@ViewChild attribute named 'infoAlert' must be a 'PicoPlacaAlertComponent' and it has to be represented by tag 'pico-placa-alert'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const infoAlert: ElementRef = fixture.componentInstance.infoAlert;
    expect(infoAlert.nativeElement.tagName.toLowerCase()).toBe('pico-placa-alert');
  });
});
