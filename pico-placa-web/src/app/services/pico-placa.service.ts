import { Injectable } from '@angular/core';
import { PicoPlaca } from '../models/pico-placa';
import * as moment from 'moment';
import { DAYS_OF_WEEK } from '../constants/days-week';
import { SCHEDULE } from '../constants/schedule';

const DATE_FORMAT = "DD/MM/YYY";
const TIME_FORMAT = "hh:mm";

@Injectable({
  providedIn: 'root'
})
export class PicoPlacaService {

  constructor() { }

  /**
   * METHOD TO GET THE DAY NUMBER FROM A STRING DATE
   * AUTHOR: FREDI ROMAN
   * @param strTime
   */
  public isTimeBetweenTwoBaseTimes(strTime: string, baseTimeFrom: string, baseTimeTo: string) {
    return moment(strTime, TIME_FORMAT).isBetween(moment(baseTimeFrom, TIME_FORMAT), moment(baseTimeTo, TIME_FORMAT));
  }

  /**
   * METHOD TO GET THE DAY NUMBER FROM A STRING DATE
   * AUTHOR: FREDI ROMAN
   * @param strDate
   */
  public getDayNumber(strDate: string) {
    return moment(strDate, DATE_FORMAT).day();
  }

  /**
   * METHOD TO VERIFY WHETHER OR NOT A DATE STRING IS A VALID DATE
   * AUTHOR: FREDI ROMAN
   * @param strTime
   */
  public isValidTime(strTime: string) {
    return moment(strTime, TIME_FORMAT).isValid();
  }

  /**
   * METHOD TO VERIFY WHETHER OR NOT A DATE STRING IS A VALID DATE
   * AUTHOR: FREDI ROMAN
   * @param strDate 
   */
  public isValidDate(strDate: string) {
    return moment(strDate, DATE_FORMAT).isValid();
  }

  /**
   * METHOD TO VALIDATE IF A CAR CAN BE DRIVEN OR NOT
   * AUTHOR: FREDI ROMAN
   * @param picoPlaca OBJECT WHICH CONTAINS: PLATE NUMBER, DATE AND TIME
   */
  public canCarBeDriven(picoPlaca: PicoPlaca): boolean {
    if (!picoPlaca.plateNumber || !picoPlaca.date || !picoPlaca.time) {
      return false;
    }
    if (picoPlaca.plateNumber.length == 0 || picoPlaca.date.length == 0 || picoPlaca.time.length == 0) {
      return false;
    }
    if (!this.isValidDate(picoPlaca.date) || !this.isValidTime(picoPlaca.time)) {
      return false;
    }

    let day = this.getDayNumber(picoPlaca.date);
    if (!DAYS_OF_WEEK[day]) {
      return false;
    }

    let lastDigit = parseInt(picoPlaca.plateNumber.slice(-1));
    if (DAYS_OF_WEEK[day].includes(lastDigit) && this.isTimeBetweenTwoBaseTimes(picoPlaca.time, SCHEDULE.morning.from, SCHEDULE.morning.to)) {
      return false;
    }
    if (DAYS_OF_WEEK[day].includes(lastDigit) && this.isTimeBetweenTwoBaseTimes(picoPlaca.time, SCHEDULE.afternoon.from, SCHEDULE.afternoon.to)) {
      return false;
    }

    return true;
  }
}
