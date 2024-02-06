import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';

import { DrillGeneratorComponent } from './core/features/drill-generator/drill-generator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrillGeneratorComponent, MenubarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chi-chis-drill-generator';
}
