import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PicoPlacaAlertComponent } from './components/pico-placa-alert/pico-placa-alert.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('infoAlert') infoAlert: ElementRef;
  public title: string;

  constructor() {
    this.title = 'Pico y Placa restriction for Quito city';
  }

}
