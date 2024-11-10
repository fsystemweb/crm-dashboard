import { Customer } from '../../../../features/customers/models/customer.interface';
import { Pagination } from '@crm-dashboard/shared';

export class CustomerTableResponse {
  customers: Customer[] | undefined;
  pagination: Pagination;

  constructor(customers: Customer[], pagination: Pagination) {
    this.customers = customers;
    this.pagination = pagination;
  }
}
