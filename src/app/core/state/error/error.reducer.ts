import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';

import * as ErrorActions from './error.actions';

interface State {
  response: HttpErrorResponse | undefined;
}

const initialState: State = {
  response: undefined,
};

const errorReducer = createReducer(
  initialState,

  on(ErrorActions.saveErrorAction, (state, action) => ({
    ...state,
    response: action.error,
  }))
);

export { State, initialState, errorReducer };
