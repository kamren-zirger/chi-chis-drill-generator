import {
  Component,
  Output,
  EventEmitter,
  ViewEncapsulation,
} from '@angular/core';
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
export class MenubarComponent {
  @Output() sidebarButtonClick = new EventEmitter<MouseEvent>();

  public handleClick(event: MouseEvent) {
    this.sidebarButtonClick?.emit(event);
  }
}
