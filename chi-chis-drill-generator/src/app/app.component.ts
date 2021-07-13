import { Component } from '@angular/core';
import { Fundamental, fundamentals } from './fundamentals';
import { Pattern, patterns } from './patterns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'chi-chis-drill-generator';

  get pattern() {
    return patterns[0];
  }
}
