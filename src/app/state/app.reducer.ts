import { ActionReducerMap } from '@ngrx/store';
import * as ErrorReducer from './error/error.reducer';
import { userInfoInitialState, userInfoReducer, UserInfoState } from './entities/user-info/user-info.reducer';
import { statsCardsInitialState, statsCardsReducer, StatsCardsState } from './entities/stats-cards/stats-cards.reducer';
import { customerTableInitialState, customerTableReducer, CustomerTableState } from './entities/customer-table/customer-table.reducer';

interface AppState {
  error: ErrorReducer.State;

  //Entities
  userInfo: UserInfoState;
  statsCards: StatsCardsState;
  customerTable: CustomerTableState;
}

const appReducers: ActionReducerMap<AppState> = {
  error: ErrorReducer.errorReducer,

  //Entities
  userInfo: userInfoReducer,
  statsCards: statsCardsReducer,
  customerTable: customerTableReducer,
};

const initialState: AppState = {
  error: ErrorReducer.initialState,

  //Entities
  userInfo: userInfoInitialState,
  statsCards: statsCardsInitialState,
  customerTable: customerTableInitialState,
};

export { AppState, appReducers, initialState };
