import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SelectItem } from 'src/app/shared/models/select-item.interface';

@Component({
  selector: 'app-customer-filters-section',
  templateUrl: './customer-filters-section.component.html',
  styleUrls: ['./customer-filters-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerFiltersSectionComponent {
  private notificationService = inject(NotificationService);
  searchInput = '';

  sortOptions: SelectItem[] = [
    {
      value: 'name',
      label: 'Name',
    },
    {
      value: 'status',
      label: 'Status',
    },
    {
      value: 'country',
      label: 'Country',
    },
  ];

  tags: string[] = [];

  sortSelected: string = this.sortOptions[0].value;

  updateSortValue(value: string): void {
    this.sortSelected = value;
  }

  addTag(): void {
    if (this.searchInput.length === 0) {
      return;
    }

    if (this.checkTagExist()) {
      return;
    }

    if (this.checkMaximumTagAllowed()) {
      return;
    }

    if (this.checkMaximumInputTagSize()) {
      return;
    }

    this.tags.push(this.searchInput);
    this.searchInput = '';
  }

  clickOnTag(tagToRemove: string): void {
    const newTags = this.tags.filter((item) => item !== tagToRemove);
    this.tags = newTags;
  }

  checkTagExist(): boolean {
    if (this.tags.find((item) => item === this.searchInput)) {
      this.notificationService.showNotification('Error duplicate tag: ' + this.searchInput);
      return true;
    }
    return false;
  }

  checkMaximumTagAllowed(): boolean {
    if (this.tags.length > 5) {
      this.notificationService.showNotification('Error maximum tag quantity reached: ' + 5);
      return true;
    }
    return false;
  }

  checkMaximumInputTagSize(): boolean {
    if (this.searchInput.length > 10) {
      this.notificationService.showNotification('Error maximum search length string reached: ' + 10);
      return true;
    }
    return false;
  }
}
