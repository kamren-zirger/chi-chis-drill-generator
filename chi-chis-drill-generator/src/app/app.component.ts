import { Component } from '@angular/core';
import { Fundamental, fundamentals } from './fundamentals';
import { Pattern, patterns } from './patterns';

import { MatSliderModule } from '@angular/material/slider';

function randInt(len: number) {
  return Math.floor(Math.random() * len);
}

function countSum(a: Array<Fundamental>) {
  let sum = 0;
  a.forEach((fund) => {
    sum += fund.counts;
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
  currentDrill = new Array<Fundamental>();

  get pattern() {
    return patterns[randInt(patterns.length)];
  }

  setCountNum(event: any) {
    this.minCountNum = event.value;
  }

  genDrill() {
    // Clear old drill
    this.currentDrill = [];

    // Get random drill until minimum counts satisfied
    while (countSum(this.currentDrill) < this.minCountNum) {
      // Get pattern to add
      let curPattern = patterns[randInt(patterns.length)];
      // Add each fundamental to drill
      curPattern.fundamentals.forEach((fund) => {
        this.currentDrill.push(fund);
      });
    }
  }
}
