import { createAction, props } from '@ngrx/store';
import { Customer } from 'src/app/features/customers/models/customer.interface';

const fetchCustomerTable = createAction('[Customer Table] Fetch');

const failFetchCustomerTable = createAction('[Customer Table] Fail');

const failedFetchCustomerTable = createAction('[Customer Table] Failed');

const saveCustomerTable = createAction('[Customer Table] Save', props<{ customerTable: Customer[] }>());

const savedCustomerTable = createAction('[Customer Table] Saved');

export { fetchCustomerTable, failFetchCustomerTable, failedFetchCustomerTable, saveCustomerTable, savedCustomerTable };
