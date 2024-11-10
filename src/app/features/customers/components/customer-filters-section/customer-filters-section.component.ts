import { ChangeDetectionStrategy, Component, inject, output } from '@angular/core';
import { NotificationService } from '../../../../core/services/notification.service';
import { SelectItem } from '@crm-dashboard/shared';

@Component({
  selector: 'app-customer-filters-section',
  templateUrl: './customer-filters-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerFiltersSectionComponent {
  private notificationService = inject(NotificationService);
  searchInput = '';

  onSortChange = output<string>();
  onFilterTagsChange = output<string[]>();

  readonly sortOptions: SelectItem[] = [
    { value: 'customerName', label: 'Name' },
    { value: 'status', label: 'Status' },
    { value: 'country', label: 'Country' },
  ];

  tags: string[] = [];
  sortSelected = this.sortOptions[0].value;
  private readonly maxTags = 5;
  private readonly maxTagLength = 150;

  updateSortValue(value: string): void {
    this.sortSelected = value;
    this.onSortChange.emit(value);
  }

  addTag(): void {
    if (this.isInputValid()) {
      const tagsCopy = [...this.tags];
      tagsCopy.push(this.searchInput);
      this.tags = tagsCopy;

      this.searchInput = '';
      this.emitEvent();
    }
  }

  removeTag(tagToRemove: string): void {
    this.tags = this.tags.filter((tag) => tag !== tagToRemove);
    this.emitEvent();
  }

  private isInputValid(): boolean {
    if (!this.searchInput) return false;

    const validators: Array<[boolean, string]> = [
      [this.isTagDuplicate(), `Duplicate tag: ${this.searchInput}`],
      [this.isMaxTagCountReached(), `Maximum tag count reached: ${this.maxTags}`],
      [this.isTagLengthExceeded(), `Maximum tag length exceeded: ${this.maxTagLength}`],
    ];

    for (const [isInvalid, message] of validators) {
      if (isInvalid) {
        this.notificationService.showNotification(`Error-> ${message}`);
        return false;
      }
    }

    return true;
  }

  private isTagDuplicate(): boolean {
    return this.tags.includes(this.searchInput);
  }

  private isMaxTagCountReached(): boolean {
    return this.tags.length >= this.maxTags;
  }

  private isTagLengthExceeded(): boolean {
    return this.searchInput.length > this.maxTagLength;
  }
  private emitEvent(): void {
    this.onFilterTagsChange.emit(this.tags);
  }
}
