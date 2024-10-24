import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-customer-filters-section',
  templateUrl: './customer-filters-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerFiltersSectionComponent {
  searchInput = '';
}
