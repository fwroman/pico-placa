import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PicoPlacaAlertComponent } from './components/pico-placa-alert/pico-placa-alert.component';
import { Alert } from './models/alert';
import { ALERT_TYPES } from './components/constants/alert.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('infoAlert') infoAlert: ElementRef;
  @ViewChild('responseAlert') responseAlert: ElementRef;
  public title: string;
  public infoAlertObj: Alert;
  public respAlertObj: Alert;

  constructor() {
    this.title = 'Pico y Placa restriction for Quito city';
    this.infoAlertObj = new Alert('Information Message', 'This formulary is for checking if a person who has a car with certain plate number is able to drive his car not, with plate number, date and time given.', ALERT_TYPES.info);
    this.respAlertObj = new Alert('Result Message', 'You are not allowed to drive your car.', ALERT_TYPES.danger);
  }

}
