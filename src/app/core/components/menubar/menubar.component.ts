import { Component, ViewEncapsulation } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-menubar',
  standalone: true,
  imports: [CardModule, ButtonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class MenubarComponent {}
