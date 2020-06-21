import { Component, OnInit, Input } from '@angular/core';
import { Alert } from 'src/app/models/alert';
import { ALERT_TYPES } from '../constants/alert.types';

@Component({
  selector: 'pico-placa-alert',
  templateUrl: './pico-placa-alert.component.html',
  styleUrls: ['./pico-placa-alert.component.scss']
})
export class PicoPlacaAlertComponent implements OnInit {
  @Input() alert: Alert;
  public alertTypes: any;

  constructor() {
    this.alert = new Alert('', '', 0);
    this.alertTypes = ALERT_TYPES;
  }

  ngOnInit(): void {
  }

}
