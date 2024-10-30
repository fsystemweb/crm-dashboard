import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationButtonComponent {
  label = input<string>();
  active = input<boolean>();
  disabled = input<boolean>();

  onClick = output<string>();

  handleClick(): void {
    this.onClick.emit(this.label() || '');
  }
}
