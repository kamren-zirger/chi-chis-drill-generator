import { Component } from '@angular/core';
import { Fundamental, fundamentals } from './fundamentals';
import { Pattern, patterns } from './patterns';

import { MatSliderModule } from '@angular/material/slider';

function randInt(len: number) {
  return Math.floor(Math.random() * len);
}

function countSum(a: Array<Pattern>) {
  let sum = 0;
  a.forEach((patt) => {
    patt.fundamentals.forEach((fund) => {
      sum += fund.counts;
    });
  });
  return sum;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'chi-chis-drill-generator';

  minCountNum = 32;
  curDrill = new Array<Pattern>();
  curDrillStr = new Array<any>();

  get pattern() {
    return patterns[randInt(patterns.length)];
  }

  setCountNum(event: any) {
    this.minCountNum = event.value;
  }

  genDrill() {
    // Clear old drill
    this.curDrill = [];
    this.curDrillStr = [];

    // Get random drill until minimum counts satisfied
    while (countSum(this.curDrill) < this.minCountNum) {
      // Get pattern to add
      let curPattern = patterns[randInt(patterns.length)];
      // Add each fundamental to drill
      this.curDrill.push(curPattern);
    }

    // Build drill strings
    let curFundCount = 1,
      prevFundId = -1;
    this.curDrill.forEach((patt) => {
      if (patt.name) {
        this.curDrillStr.push(patt.name);
        this.curDrillStr.push(patt.sublist);
        prevFundId = -1;
        curFundCount = 1;
      } else {
        patt.fundamentals.forEach((fund) => {
          if (fund.id === prevFundId) {
            curFundCount++;
            this.curDrillStr.pop();
            this.curDrillStr.push(curFundCount.toString() + ' ' + fund.name);
          } else {
            curFundCount = 1;
            this.curDrillStr.push(curFundCount.toString() + ' ' + fund.name);
            prevFundId = fund.id;
          }
        });
      }
    });
  }
}
