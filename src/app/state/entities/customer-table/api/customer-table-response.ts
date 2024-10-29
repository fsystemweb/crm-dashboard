import { Customer } from 'src/app/features/customers/models/customer.interface';
import { Pagination } from 'src/app/shared/models/pagination.interface';

export class CustomerTableResponse {
  customers: Customer[];
  pagination: Pagination;

  constructor(customers: Customer[], pagination: Pagination) {
    this.customers = customers;
    this.pagination = pagination;
  }
}
