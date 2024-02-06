import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { SliderModule } from 'primeng/slider';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-drill-generator',
  standalone: true,
  imports: [CardModule, ButtonModule, SliderModule, DividerModule],
  templateUrl: './drill-generator.component.html',
  styleUrl: './drill-generator.component.scss',
})
export class DrillGeneratorComponent {}
