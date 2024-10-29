interface Pagination {
  page: number;
  size: number;
  totalElements?: number;
  sort?: PaginationSort;
}

interface PaginationSort {
  property: string;
  direction: SortDirection;
}

type SortDirection = 'ASC' | 'DSC';

export { Pagination, PaginationSort, SortDirection };
