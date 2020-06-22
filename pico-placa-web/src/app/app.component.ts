import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PicoPlacaAlertComponent } from './components/pico-placa-alert/pico-placa-alert.component';
import { Alert } from './models/alert';
import { ALERT_TYPES } from './constants/alert.types';
import { PicoPlaca } from './models/pico-placa';

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
    this.onPicoPlaceProcessCalling();
  }

  //private onPicoPlaceProcessCalling() {}

  /**
   * METHOD TO DEFINE RESPONSE ALERT OBJECT
   * AUTHOR: FREDI ROMAN
   */
  private onPicoPlaceProcessCalling() {
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
