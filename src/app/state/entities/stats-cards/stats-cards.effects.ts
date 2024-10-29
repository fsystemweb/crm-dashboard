import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { saveErrorAction } from '../../error/error.actions';
import { failFetchStatsCards, fetchStatsCards, saveStatsCards } from './stats-cards.actions';
import { StatsCards } from 'src/app/features/customers/models/stats-cards.interface';

@Injectable()
export class StatsCardsEffects {
  private actions$ = inject(Actions);
  private httpClient = inject(HttpClient);

  StatsCards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchStatsCards),
      switchMap(() =>
        this.httpClient.get(`${environment.apiUrl}/statInfo`).pipe(
          map((statsCardsResponse) => {
            const statsCards = { ...statsCardsResponse };

            return saveStatsCards({
              statsCards: statsCards as StatsCards,
            });
          }),
          catchError((error: HttpErrorResponse) => of(saveErrorAction(error), failFetchStatsCards()))
        )
      )
    )
  );
}
