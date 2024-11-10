import { createAction, props } from '@ngrx/store';
import { UserInfo } from '@crm-dashboard/shared';

const fetchUserInfo = createAction('[User Info] Fetch');

const failFetchUserInfo = createAction('[User Info] Fail');

const failedFetchUserInfo = createAction('[User Info] Failed');

const saveUserInfo = createAction('[User Info] Save', props<{ userInfo: UserInfo }>());

const savedUserInfo = createAction('[User Info] Saved');

export { fetchUserInfo, failFetchUserInfo, failedFetchUserInfo, saveUserInfo, savedUserInfo };
