import { ActionReducerMap } from '@ngrx/store';
import * as ErrorReducer from './error/error.reducer';
import { userInfoInitialState, userInfoReducer, UserInfoState } from './user-info/user-info.reducer';

interface AppState {
  error: ErrorReducer.State;

  //Entities
  userInfo: UserInfoState;
}

const appReducers: ActionReducerMap<AppState> = {
  error: ErrorReducer.errorReducer,

  //Entities
  userInfo: userInfoReducer,
};

const initialState: AppState = {
  error: ErrorReducer.initialState,

  //Entities
  userInfo: userInfoInitialState,
};

export { AppState, appReducers, initialState };
