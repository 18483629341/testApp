import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public a = ' a ';
  public list = [
    {
      'RL_TYPE': 'HL',
      'opi' : [
        {
          'W01019': 1.7,
          'WATER_TYPE': '1',
          'WATER_TYPE_JB': 'I',
          'W01009': 8,
          'W21003': 0.13,
          'WQ_AM_PI_NAME': '天津三岔口',
          'W21011': null,
          'W01001': 7.3,
          'W21001': null
        },
        {
          'W01019': 1.7,
          'WATER_TYPE': '1',
          'WATER_TYPE_JB': 'I',
          'W01009': 8,
          'W21003': 0.13,
          'WQ_AM_PI_NAME': '天津二岔口',
          'W21011': null,
          'W01001': 7.3,
          'W21001': null
        }
      ],
      'RLNAME': '海河',
      'RL_WATER_TYPE': '1',
      'RL_WATER_TYPE_JB': 'I',
      'MTIME': '2018/5/30 21:00'
    },
    {
      'RL_TYPE': 'HL',
      'opi': [
        {
          'W01019': 1.9,
          'WATER_TYPE': '2',
          'WATER_TYPE_JB': 'II',
          'W01009': 6.9,
          'W21003': 0.26,
          'WQ_AM_PI_NAME': '天津果河桥',
          'W21011': 0.05,
          'W01001': 8.5,
          'W21001': 2.82
        },
        {
          'W01019': 1.9,
          'WATER_TYPE': '2',
          'WATER_TYPE_JB': 'II',
          'W01009': 6.9,
          'W21003': 0.26,
          'WQ_AM_PI_NAME': '天津奈河桥',
          'W21011': 0.05,
          'W01001': 8.5,
          'W21001': 2.82
        }
      ],
      'RLNAME': '黎河',
      'RL_WATER_TYPE': '2',
      'RL_WATER_TYPE_JB': 'II',
      'MTIME': '2018/5/30 21:00'
    }
  ]
  constructor() {

  }

  // this.getSectionList();

  getSectionList() {
    // this.homeService.getSectionList({} , true , (res) => {
    // console.log(res);
    // });
  }
}
