import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as ErrorReducer from './error.reducer';

const getErrorsState = createFeatureSelector<ErrorReducer.State>('error');

const getErrors = createSelector(getErrorsState, (state: ErrorReducer.State) => ({
  response: state.response,
}));

export { getErrorsState, getErrors };
