import { Pagination } from '@crm-dashboard/shared';

export class CustomerTableRequest {
  pagination: Pagination;
  filterTags?: string[];

  constructor(pagination: Pagination, filterTags: string[] = []) {
    this.pagination = pagination;
    this.filterTags = filterTags;
  }
}
