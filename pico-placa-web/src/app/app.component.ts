import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string;

  constructor() {
    this.title = 'Pico y Placa restriction for Quito city';
  }

}
