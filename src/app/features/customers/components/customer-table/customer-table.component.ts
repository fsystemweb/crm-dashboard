import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { AppState } from 'src/app/state/app.reducer';
import { fetchCustomerTable, savedCustomerTable } from 'src/app/state/entities/customer-table/customer-table.actions';
import { getCustomerTable } from 'src/app/state/entities/customer-table/customer-table.selectors';
import { Customer } from '../../models/customer.interface';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerTableComponent {
  private store: Store<AppState> = inject(Store);
  private destroyRef = inject(DestroyRef);
  private ref = inject(ChangeDetectorRef);

  customers: Customer[] = [];

  constructor() {
    this.store.dispatch(fetchCustomerTable());
    this.setCustomerTable();
  }

  private setCustomerTable(): void {
    this.store
      .select(getCustomerTable)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(({ loadedCustomerTable }) => loadedCustomerTable)
      )
      .subscribe(({ customerTable }) => {
        if (!customerTable) {
          return;
        }

        this.customers = customerTable as Customer[];

        this.ref.markForCheck();

        this.store.dispatch(savedCustomerTable());
      });
  }
}
