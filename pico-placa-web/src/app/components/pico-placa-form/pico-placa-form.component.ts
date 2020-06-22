import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PicoPlaca } from 'src/app/models/pico-placa';
import { PicoPlacaService } from 'src/app/services/pico-placa.service';
import { AfterPicoPlacaProcInterface } from 'src/app/interfaces/afert-pico-proc.iterface';

@Component({
  selector: 'pico-placa-form',
  templateUrl: './pico-placa-form.component.html',
  styleUrls: ['./pico-placa-form.component.scss'],
  providers: [PicoPlacaService]
})
export class PicoPlacaFormComponent implements OnInit {
  @ViewChild('frmPicoPlaca') form: NgForm;
  @Output() onPicoPlacaProcess: EventEmitter<AfterPicoPlacaProcInterface>;

  public title: string;
  public picoPlaca: PicoPlaca;
  public submittedForm: boolean;
  public isAllowedToDrive: boolean;

  constructor(
    public _picoPlacaService: PicoPlacaService
  ) {
    this.title = 'Find out whether or not you have driving allowance in Quito Now';
    this.picoPlaca = new PicoPlaca(null, null, null);
    this.submittedForm = false;
    this.onPicoPlacaProcess = new EventEmitter<AfterPicoPlacaProcInterface>();
  }

  ngOnInit(): void {
  }

  /**
   * METHOD TO VALIDATE WHETHER OR NOT THE DATE IS CORRECT
   * AUTHOR: FREDI ROMAN
   */
  public validateDate() {
    if (!this._picoPlacaService.isValidDate(this.picoPlaca.date)) {
      this.form.form.controls['date'].setErrors({ 'incorrect': true });
    }
  }

  /**
   * METHOD TO VALIDATE WHETHER OR NOT THE TIME IS CORRECT
   * AUTHOR: FREDI ROMAN
   */
  public validateTime() {
    if (!this._picoPlacaService.isValidTime(this.picoPlaca.time)) {
      this.form.form.controls['time'].setErrors({ 'incorrect': true });
    }
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
    let resp = this._picoPlacaService.canCarBeDriven(this.picoPlaca);
    this.onPicoPlacaProcess.emit({ response: resp, picoPlaca: this.picoPlaca });
  }
}
