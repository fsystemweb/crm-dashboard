import { Component, input, output, effect, inject, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectItem } from '../../models/select-item.interface';
import { IconModule } from '../icons/icon.module';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  standalone: true,
  imports: [FormsModule, IconModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  private ref = inject(ChangeDetectorRef);

  options = input<SelectItem[]>([]);
  prefix = input<string>();
  selectionChange = output<string>();
  selectedValue: SelectItem = { value: '', label: '' };
  isDropdownOpen = false;

  constructor() {
    effect(() => {
      if (this.options().length > 0) {
        this.selectedValue = this.options()[0];
        this.ref.markForCheck();
      }
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.ref.markForCheck();
  }

  selectOption(option: SelectItem): void {
    this.selectedValue = option;
    this.isDropdownOpen = false;
    this.ref.markForCheck();
    this.selectionChange.emit(option.value);
  }
}
