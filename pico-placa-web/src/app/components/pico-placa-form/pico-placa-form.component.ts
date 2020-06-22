import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PicoPlaca } from 'src/app/models/pico-placa';

@Component({
  selector: 'pico-placa-form',
  templateUrl: './pico-placa-form.component.html',
  styleUrls: ['./pico-placa-form.component.scss']
})
export class PicoPlacaFormComponent implements OnInit {
  @ViewChild('frmPicoPlaca') form: NgForm;
  public title: string;
  public picoPlaca: PicoPlaca;
  public submittedForm: boolean;
  public isAllowedToDrive: boolean;

  constructor() {
    this.title = 'Find out whether or not you have driving allowance in Quito Now';
    this.picoPlaca = new PicoPlaca(null, null, null);
    this.submittedForm = false;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.form.form.controls['plateNum'].setErrors({ 'incorrect': true });
    }, 500);
  }

  /**
   * METHOD TO VALIDATE WHETHER OR NOT THE DATE IS CORRECT
   * AUTHOR: FREDI ROMAN
   */
  public validateDate() {
    
  }

  /**
   * METHOD TO VALIDATE WHETHER OR NOT THE TIME IS CORRECT
   * AUTHOR: FREDI ROMAN
   */
  public validateTime() {

  }

  /**
   * METHOD TO START THE 'PICO Y PLACA' PROCESS
   * AUTHO: FREDI ROMAN
   */
  public onSubmitProcess() {
    this.submittedForm = true;
    if (this.form.form.invalid) {
      return;
    }
  }
}
