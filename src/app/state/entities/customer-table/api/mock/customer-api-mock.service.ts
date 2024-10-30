import { Injectable } from '@angular/core';
import { Customer } from 'src/app/features/customers/models/customer.interface';
import { Pagination, PaginationSort } from 'src/app/shared/models/pagination.interface';
import { CustomerTableResponse } from '../customer-table-response';

@Injectable({
  providedIn: 'root',
})
export class CustomerApiMockService {
  // TODO: This Service is just for demo purposes. We should get rid of this when we connect this App with a proper API, json-server only retrieves static data

  createMockResponse(pagination: Pagination, filterTags: string[] | undefined, customerTable: Customer[]): CustomerTableResponse {
    let mockCustomers = customerTable;
    let totalElementsCopy = [...[customerTable.length]];

    if (filterTags && filterTags.length > 0) {
      mockCustomers = this.filterByStrings(mockCustomers, filterTags);
      totalElementsCopy = [...[mockCustomers.length]];
    }

    if (pagination.sort) {
      mockCustomers = this.sortData(pagination.sort, mockCustomers);
    }
    mockCustomers = this.paginateData(pagination, mockCustomers);

    const mockPagination = this.createMockPagination(pagination, totalElementsCopy[0]);

    const customerTableResponse: CustomerTableResponse = new CustomerTableResponse(mockCustomers, mockPagination);

    return customerTableResponse;
  }

  // eslint-disable-next-line
  private sortData(sort: PaginationSort, data: any[]): Customer[] {
    let ascending = false;
    if (sort.direction === 'ASC') {
      ascending = true;
    }

    const sortedData = [...data].sort((a, b) => {
      if (a[sort.property] < b[sort.property]) return ascending ? -1 : 1;
      if (a[sort.property] > b[sort.property]) return ascending ? 1 : -1;
      return 0;
    });

    return sortedData;
  }

  // eslint-disable-next-line
  private filterByStrings(data: any[], searchStrings: string[]): Customer[] {
    const lowerCaseSearchStrings = searchStrings.map((str) => str.toLowerCase());

    return data.filter((item) => {
      return lowerCaseSearchStrings.every((searchString) => {
        return Object.values(item).some((value) => String(value).toLowerCase() === searchString);
      });
    });
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
      sort: pagination.sort,
    };
  }
}
