import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { CustomerTableComponent } from './customer-table.component';
import { AppState } from 'src/app/state/app.reducer';
import { fetchCustomerTable, savedCustomerTable } from 'src/app/state/entities/customer-table/customer-table.actions';

import { getCustomerTable } from 'src/app/state/entities/customer-table/customer-table.selectors';
import { ChangeDetectorRef } from '@angular/core';
import { of } from 'rxjs';

import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Customer } from '../../models/customer.interface';
import { CustomerTableResponse } from 'src/app/state/entities/customer-table/api/customer-table-response';
import { CustomerFiltersSectionComponent } from '../customer-filters-section/customer-filters-section.component';

import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { CustomerStatusComponent } from '../customer-status/customer-status.component';
import { IconModule, Pagination, SelectComponent, setPagination, SpinnerOverlayComponent, TablePaginationComponent } from '@crm-dashboard/shared';

describe('CustomerTableComponent', () => {
  let component: CustomerTableComponent;
  let fixture: ComponentFixture<CustomerTableComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerTableComponent, CustomerFiltersSectionComponent, CustomerStatusComponent],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideMockStore({})],
      imports: [TablePaginationComponent, SelectComponent, FormsModule, IconModule, SpinnerOverlayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerTableComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    store.dispatch = jest.fn();
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch fetchCustomerTable action', () => {
    (component as any).fetchCustomerTable();
    expect(store.dispatch).toHaveBeenCalledWith(fetchCustomerTable({ pagination: component.pagination, filterTags: [] }));
  });

  it('should update pagination, fetch data on updatePagination', () => {
    const newPagination = { page: 1, size: 10, sort: { property: 'name', direction: 'ASC' } } as Pagination;

    component.updatePagination(newPagination);

    expect(component.pagination).toEqual(newPagination);
    expect(store.dispatch).toHaveBeenCalledWith(fetchCustomerTable({ pagination: newPagination, filterTags: [] }));
  });

  it('should update sorting, fetch data on updateSort', () => {
    component.updateSort('customerName');

    expect(component.pagination.sort).toEqual({ property: 'customerName', direction: 'ASC' });
    expect(store.dispatch).toHaveBeenCalledWith(fetchCustomerTable({ pagination: component.pagination, filterTags: [] }));
  });

  it('should update filterTags, fetch data on updateTags', () => {
    component.updateTags(['canada']);

    expect(component.pagination.sort).toEqual({ property: 'customerName', direction: 'ASC' });
    expect(store.dispatch).toHaveBeenCalledWith(fetchCustomerTable({ pagination: component.pagination, filterTags: ['canada'] }));
  });

  it('should not update customers if customer table data is not loaded', () => {
    let customerData = {
      customers: undefined,
      pagination: { page: 0, size: 10 } as Pagination,
    } as CustomerTableResponse;

    store.overrideSelector(getCustomerTable, {
      loadingCustomerTable: false,
      loadedCustomerTable: false,
      customerTable: customerData,
      failCustomerTable: false,
    });

    (component as any).setCustomerTable();
    fixture.detectChanges();

    expect(component.customers).toEqual([]);
    expect(store.dispatch).not.toHaveBeenCalledWith(setPagination(expect.any(Object)));
    expect(store.dispatch).not.toHaveBeenCalledWith(savedCustomerTable());
  });

  it('should set customers and update pagination when customer table data is loaded', () => {
    let customerData = {
      customers: [
        {
          customerName: 'John Doe',
          company: 'Acme Corp',
          phone: '+1-555-0123',
          email: 'john.doe@acmecorp.com',
          country: 'USA',
          status: 'Active',
        },
      ] as Customer[],
      pagination: { page: 0, size: 10 } as Pagination,
    } as CustomerTableResponse;

    store.overrideSelector(getCustomerTable, {
      loadingCustomerTable: false,
      loadedCustomerTable: true,
      customerTable: customerData,
      failCustomerTable: false,
    });

    (component as any).setCustomerTable();
    fixture.detectChanges();

    expect(component.customers).toEqual(customerData.customers);
    expect(store.dispatch).toHaveBeenCalledWith(setPagination({ pagination: customerData.pagination }));
    expect(store.dispatch).toHaveBeenCalledWith(savedCustomerTable());
  });
});
