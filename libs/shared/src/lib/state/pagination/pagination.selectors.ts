import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as PaginationReducer from './pagination.reducer';

const getPaginationState = createFeatureSelector<PaginationReducer.PaginationState>('pagination');

const getPagination = createSelector(getPaginationState, (state: PaginationReducer.PaginationState) => ({
  pagination: state?.pagination,
}));

export { getPaginationState, getPagination };
