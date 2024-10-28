import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SelectItem } from 'src/app/shared/models/select-item.interface';

@Component({
  selector: 'app-customer-filters-section',
  templateUrl: './customer-filters-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerFiltersSectionComponent {
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

  sortSelected: string = this.sortOptions[0].value;

  updateSortValue(value: string): void {
    this.sortSelected = value;
  }
}
