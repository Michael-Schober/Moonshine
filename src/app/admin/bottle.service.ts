import { Injectable } from '@angular/core';
import { Time } from '@angular/common';

export class BottleService {

  constructor() { }

  times: Time[] =
  [
      {hours: 10, minutes: 0},
      {hours: 10, minutes: 30},
      {hours: 11, minutes: 0},
      {hours: 11, minutes: 30},
  ];
}
