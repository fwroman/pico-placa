import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pico-placa-form',
  templateUrl: './pico-placa-form.component.html',
  styleUrls: ['./pico-placa-form.component.scss']
})
export class PicoPlacaFormComponent implements OnInit {
  public title: string;

  constructor() {
    this.title = 'Find out whether or not you have driving allowance in Quito Now';
  }

  ngOnInit(): void {

  }

}
