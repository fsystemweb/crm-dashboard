import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CustomerStatus } from '../../models/customer.interface';

@Component({
  selector: 'app-customer-status',
  templateUrl: './customer-status.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerStatusComponent {
  customerStatus = input<CustomerStatus>();
}
