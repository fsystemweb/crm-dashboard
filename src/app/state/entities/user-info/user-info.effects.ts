import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { of } from 'rxjs';
import { saveErrorAction } from '../../error/error.actions';
import { failFetchUserInfo, fetchUserInfo, saveUserInfo } from './user-info.actions';
import { UserInfo } from '@crm-dashboard/shared';

@Injectable()
export class UserInfoEffects {
  private actions$ = inject(Actions);
  private httpClient = inject(HttpClient);

  userInfo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchUserInfo),
      switchMap(() =>
        this.httpClient.get(`${environment.apiUrl}/userInfo`).pipe(
          map((userInfoResponse) => {
            const userInfo = { ...userInfoResponse };

            return saveUserInfo({
              userInfo: userInfo as UserInfo,
            });
          }),
          catchError((error: HttpErrorResponse) => of(saveErrorAction(error), failFetchUserInfo()))
        )
      )
    )
  );
}
