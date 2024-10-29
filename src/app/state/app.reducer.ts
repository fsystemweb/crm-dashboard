import { ActionReducerMap } from '@ngrx/store';
import * as ErrorReducer from './error/error.reducer';
import { userInfoInitialState, userInfoReducer, UserInfoState } from './user-info/user-info.reducer';
import { statsCardsInitialState, statsCardsReducer, StatsCardsState } from './stats-cards/stats-cards.reducer';

interface AppState {
  error: ErrorReducer.State;

  //Entities
  userInfo: UserInfoState;
  statsCards: StatsCardsState;
}

const appReducers: ActionReducerMap<AppState> = {
  error: ErrorReducer.errorReducer,

  //Entities
  userInfo: userInfoReducer,
  statsCards: statsCardsReducer,
};

const initialState: AppState = {
  error: ErrorReducer.initialState,

  //Entities
  userInfo: userInfoInitialState,
  statsCards: statsCardsInitialState,
};

export { AppState, appReducers, initialState };
