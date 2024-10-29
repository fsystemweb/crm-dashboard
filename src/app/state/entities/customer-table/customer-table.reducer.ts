import { createReducer, on } from '@ngrx/store';

import {
  fetchCustomerTable,
  failFetchCustomerTable,
  failedFetchCustomerTable,
  saveCustomerTable,
  savedCustomerTable,
} from './customer-table.actions';
import { Customer } from 'src/app/features/customers/models/customer.interface';
import { CustomerTableResponse } from './api/customer-table-response';

interface CustomerTableState {
  loadingCustomerTable: boolean;
  loadedCustomerTable: boolean;
  failCustomerTable: boolean;
  failedCustomerTable: boolean;
  customerTable: CustomerTableResponse | undefined;
}

const customerTableInitialState: CustomerTableState = {
  loadingCustomerTable: false,
  loadedCustomerTable: false,
  failCustomerTable: false,
  failedCustomerTable: false,
  customerTable: undefined,
};

const customerTableReducer = createReducer(
  customerTableInitialState,

  on(fetchCustomerTable, (state) => ({
    ...state,
    loadingCustomerTable: true,
    loadedCustomerTable: false,
  })),

  on(failFetchCustomerTable, (state) => ({
    ...state,
    loadingCustomerTable: false,
    loadedCustomerTable: false,
    customerTable: { ...state.customerTable } as CustomerTableResponse,
    failCustomerTable: true,
  })),

  on(failedFetchCustomerTable, (state) => ({
    ...state,
    failCustomerTable: false,
  })),

  on(saveCustomerTable, (state, action) => ({
    ...state,
    loadingCustomerTable: true,
    loadedCustomerTable: true,
    customerTable: { ...action.customerTable } as CustomerTableResponse,
  })),

  on(savedCustomerTable, (state) => ({
    ...state,
    loadingCustomerTable: false,
    loadedCustomerTable: false,
  }))
);

export { CustomerTableState, customerTableInitialState, customerTableReducer };
