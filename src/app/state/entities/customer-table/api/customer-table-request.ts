import { Pagination } from 'src/app/shared/models/pagination.interface';

export class CustomerTableRequest {
  pagination: Pagination;
  filterTags?: string[];

  constructor(pagination: Pagination, filterTags: string[] = []) {
    this.pagination = pagination;
    this.filterTags = filterTags;
  }
}
