import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as CustomerTableReducer from './customer-table.reducer';

const getCustomerTableState = createFeatureSelector<CustomerTableReducer.CustomerTableState>('customerTable');

const getCustomerTable = createSelector(getCustomerTableState, (state: CustomerTableReducer.CustomerTableState) => ({
  loadingCustomerTable: state?.loadingCustomerTable,
  loadedCustomerTable: state?.loadedCustomerTable,
  customerTable: { ...state.customerTable },
  failCustomerTable: state?.failCustomerTable,
}));

export { getCustomerTableState, getCustomerTable };
