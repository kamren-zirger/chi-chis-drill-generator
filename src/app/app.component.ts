import { Component, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { DrillGeneratorComponent } from './core/features/drill-generator/drill-generator.component';
import { MenubarComponent } from './core/components/menubar/menubar.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    DrillGeneratorComponent,
    MenubarComponent,
    SidebarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'chi-chis-drill-generator';

  sidebarVisible: boolean = false;
}
