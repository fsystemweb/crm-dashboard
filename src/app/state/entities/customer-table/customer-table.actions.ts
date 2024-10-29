import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/features/customers/models/customer.interface';
import { CustomerTableRequest } from './api/customer-table-request';
import { CustomerTableResponse } from './api/customer-table-response';

const fetchCustomerTable = createAction('[Customer Table] Fetch', props<CustomerTableRequest>());

const failFetchCustomerTable = createAction('[Customer Table] Fail');

const failedFetchCustomerTable = createAction('[Customer Table] Failed');

const saveCustomerTable = createAction('[Customer Table] Save', props<{ customerTable: CustomerTableResponse }>());

const savedCustomerTable = createAction('[Customer Table] Saved');

export { fetchCustomerTable, failFetchCustomerTable, failedFetchCustomerTable, saveCustomerTable, savedCustomerTable };
