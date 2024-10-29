import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';

@Component({
  selector: 'app-filter-tag',
  templateUrl: './filter-tag.component.html',
  styleUrls: ['./filter-tag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterTagComponent {
  tag = input<string>();
  onClick = output<string>();

  readonly tagLengthDisplay = 15;

  handleClick(): void {
    const tagValue = this.tag();
    if (!tagValue) {
      return;
    }
    this.onClick.emit(tagValue);
  }

  showTooltip(): boolean {
    const tagValue = this.tag() || '';
    if (tagValue.length >= this.tagLengthDisplay) {
      return true;
    }
    return false;
  }
}
