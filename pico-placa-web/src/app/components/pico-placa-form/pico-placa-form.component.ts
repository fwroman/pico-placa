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

  constructor() {
    this.title = 'Find out whether or not you have driving allowance in Quito Now';
    this.picoPlaca = new PicoPlaca('', '', '');
  }

  ngOnInit(): void {
  }

}
