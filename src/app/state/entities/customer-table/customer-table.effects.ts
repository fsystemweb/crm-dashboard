import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { saveErrorAction } from '../../error/error.actions';
import { failFetchCustomerTable, fetchCustomerTable, saveCustomerTable } from './customer-table.actions';
import { Customer } from 'src/app/features/customers/models/customer.interface';

@Injectable()
export class CustomerTableEffects {
  private actions$ = inject(Actions);
  private httpClient = inject(HttpClient);

  CustomerTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCustomerTable),
      switchMap(() =>
        this.httpClient.get(`${environment.apiUrl}/customers`).pipe(
          map((customerTableResponse) => {
            const customerTable = customerTableResponse;

            return saveCustomerTable({
              customerTable: customerTable as Customer[],
            });
          }),
          catchError((error: HttpErrorResponse) => of(saveErrorAction(error), failFetchCustomerTable()))
        )
      )
    )
  );
}
