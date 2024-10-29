import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as UserInfoReducer from './user-info.reducer';

const getUserInfoState = createFeatureSelector<UserInfoReducer.UserInfoState>('userInfo');

const getUserInfo = createSelector(getUserInfoState, (state: UserInfoReducer.UserInfoState) => ({
  loadingUserInfo: state?.loadingUserInfo,
  loadedUserInfo: state?.loadedUserInfo,
  userInfo: { ...state.userInfo },
  failUserInfo: state?.failUserInfo,
}));

export { getUserInfoState, getUserInfo };
