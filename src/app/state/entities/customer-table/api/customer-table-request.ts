import { Pagination } from 'src/app/shared/models/pagination.interface';

export class CustomerTableRequest {
  pagination: Pagination;

  constructor(pagination: Pagination) {
    this.pagination = pagination;
  }
}
