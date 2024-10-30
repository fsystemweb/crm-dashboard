import { Injectable } from '@angular/core';
import { Customer } from 'src/app/features/customers/models/customer.interface';
import { Pagination } from 'src/app/shared/models/pagination.interface';
import { CustomerTableResponse } from '../customer-table-response';

@Injectable({
  providedIn: 'root',
})
export class CustomerApiMockService {
  // TODO: This Service is just for demo purposes

  createMockResponse(pagination: Pagination, customerTable: Customer[]): CustomerTableResponse {
    const mockPagination = this.createMockPagination(pagination, customerTable.length);

    const mockCustomers = this.paginateData(pagination, customerTable);

    const customerTableResponse: CustomerTableResponse = new CustomerTableResponse(mockCustomers, mockPagination);

    return customerTableResponse;
  }

  private paginateData(pagination: Pagination, data: Customer[]): Customer[] {
    const start = pagination.page * pagination.size;
    return data.slice(start, start + pagination.size);
  }

  private createMockPagination(pagination: Pagination, totalElements: number): Pagination {
    return {
      page: pagination.page,
      size: pagination.size,
      totalElements: totalElements,
    };
  }
}
