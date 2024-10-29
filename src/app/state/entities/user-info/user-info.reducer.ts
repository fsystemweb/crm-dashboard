import { createReducer, on } from '@ngrx/store';
import { UserInfo } from 'src/app/shared/models/user-info.interface';
import { fetchUserInfo, failFetchUserInfo, failedFetchUserInfo, saveUserInfo, savedUserInfo } from './user-info.actions';

interface UserInfoState {
  loadingUserInfo: boolean;
  loadedUserInfo: boolean;
  failUserInfo: boolean;
  failedUserInfo: boolean;
  userInfo: UserInfo | undefined;
}

const userInfoInitialState: UserInfoState = {
  loadingUserInfo: false,
  loadedUserInfo: false,
  failUserInfo: false,
  failedUserInfo: false,
  userInfo: undefined,
};

const userInfoReducer = createReducer(
  userInfoInitialState,

  on(fetchUserInfo, (state) => ({
    ...state,
    loadingUserInfo: true,
    loadedUserInfo: false,
  })),

  on(failFetchUserInfo, (state) => ({
    ...state,
    loadingUserInfo: false,
    loadedUserInfo: false,
    userInfo: { ...state.userInfo } as UserInfo,
    failUserInfo: true,
  })),

  on(failedFetchUserInfo, (state) => ({
    ...state,
    failUserInfo: false,
  })),

  on(saveUserInfo, (state, action) => ({
    ...state,
    loadingUserInfo: true,
    loadedUserInfo: true,
    userInfo: { ...action.userInfo } as UserInfo,
  })),

  on(savedUserInfo, (state) => ({
    ...state,
    loadingUserInfo: false,
    loadedUserInfo: false,
  }))
);

export { UserInfoState, userInfoInitialState, userInfoReducer };
