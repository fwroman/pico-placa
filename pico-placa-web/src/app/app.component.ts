import { Component, ViewChild, ElementRef } from '@angular/core';
import { Alert } from './models/alert';
import { ALERT_TYPES } from './constants/alert.types';
import { PicoPlaca } from './models/pico-placa';
import { AfterPicoPlacaProcInterface } from './interfaces/afert-pico-proc.iterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('infoAlert') infoAlert: ElementRef;
  @ViewChild('responseAlert') responseAlert: ElementRef;
  public picoPlacaChildAttr: PicoPlaca;

  public title: string;
  public infoAlertObj: Alert;
  public respAlertObj: Alert;
  public canCarBeDriven: boolean;

  constructor() {
    this.title = 'Pico y Placa restriction for Quito city';
    this.infoAlertObj = new Alert('Information Message', 'This formulary is for checking if a person who has a car with certain plate number is able to drive his car not, with plate number, date and time given.', ALERT_TYPES.info);
    this.picoPlacaChildAttr = new PicoPlaca('', '', '');
    this.defineRespAlertObject();
  }

  /**
   * METHOD TO HANDLE DATA AFTER PICO Y PLACA PROCESS
   * AUTHOR: FREDI ROMAN
   * @param procObj 
   */
  public onPicoPlaceProcessCalling(procObj: AfterPicoPlacaProcInterface) {
    this.canCarBeDriven = procObj.response;
    this.picoPlacaChildAttr = procObj.picoPlaca;
    this.defineRespAlertObject();
  }

  /**
   * METHOD TO DEFINE RESPONSE ALERT OBJECT
   * AUTHOR: FREDI ROMAN
   */
  private defineRespAlertObject() {
    this.respAlertObj = !this.canCarBeDriven ?
      new Alert(
        'Result Message', 'Unfortunately you are not allowed to drive your car with plate number ' +
        this.picoPlacaChildAttr.plateNumber + ' on ' + this.picoPlacaChildAttr.date +
        ' at ' + this.picoPlacaChildAttr.time + '.', ALERT_TYPES.danger, this.canCarBeDriven == null) :
      new Alert('Result Message', 'Congratulations! You are able to drive your car with plate number ' +
        this.picoPlacaChildAttr.plateNumber + ' on ' + this.picoPlacaChildAttr.date +
        ' at ' + this.picoPlacaChildAttr.time + '.', ALERT_TYPES.success);
  }

}
