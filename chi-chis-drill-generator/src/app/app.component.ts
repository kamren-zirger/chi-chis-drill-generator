import { Component } from '@angular/core';
import { Fundamental, fundamentals } from './fundamentals';
import { Pattern, patterns } from './patterns';

import { MatSliderModule } from '@angular/material/slider';

function randInt(len: number) {
  return Math.floor(Math.random() * len);
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'chi-chis-drill-generator';

  currentDrill = new Array<Fundamental>();

  get pattern() {
    return patterns[randInt(patterns.length)];
  }

  genDrill() {
    this.currentDrill = [];
    this.currentDrill.push(patterns[0].fundamentals[0]);
  }
}
