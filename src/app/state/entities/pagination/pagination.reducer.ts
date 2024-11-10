import { createReducer, on } from '@ngrx/store';

import { setPagination } from './pagination.actions';
import { Pagination } from '@crm-dashboard/shared';

interface PaginationState {
  pagination: Pagination;
}

const paginationInitialState: PaginationState = {
  pagination: {
    page: 0,
    size: 10,
    totalElements: 0,
  },
};

const paginationReducer = createReducer(
  paginationInitialState,

  on(setPagination, (state, action) => ({
    ...state,
    pagination: action.pagination,
  }))
);

export { PaginationState, paginationInitialState, paginationReducer };
