import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { saveErrorAction } from '../../error/error.actions';
import { failFetchCustomerTable, fetchCustomerTable, saveCustomerTable } from './customer-table.actions';
import { Customer } from 'src/app/features/customers/models/customer.interface';
import { Pagination } from 'src/app/shared/models/pagination.interface';
import { CustomerApiMockService } from './api/mock/customer-api-mock.service';

@Injectable()
export class CustomerTableEffects {
  private actions$ = inject(Actions);
  private httpClient = inject(HttpClient);
  private customerApiMockService = inject(CustomerApiMockService);

  CustomerTable$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCustomerTable),
      switchMap((action) =>
        this.httpClient.get(`${environment.apiUrl}/customers`, { params: this.createQueryParams(action.pagination, action.filterTags) }).pipe(
          map((response) => {
            const customerTable = response as Customer[];

            const customerTableResponse = this.customerApiMockService.createMockResponse(action.pagination, action.filterTags, customerTable);

            return saveCustomerTable({
              customerTable: customerTableResponse,
            });
          }),
          catchError((error: HttpErrorResponse) => of(saveErrorAction(error), failFetchCustomerTable()))
        )
      )
    )
  );

  private createQueryParams(pagination: Pagination, filterTags: string[] | undefined): HttpParams {
    let httpParams = new HttpParams();
    if (filterTags && filterTags.length > 0) {
      httpParams = httpParams.set('filterTags', filterTags.join(','));
    }
    httpParams = this.getHttpParamsWithPagination(httpParams, pagination);
    return httpParams;
  }

  private getHttpParamsWithPagination(httpParams: HttpParams, pagination: Pagination): HttpParams {
    httpParams = httpParams.set('page', pagination.page);
    httpParams = httpParams.set('size', pagination.size);

    if (pagination.sort) {
      httpParams = httpParams.set('sort', `${pagination.sort.property},${pagination.sort.direction}`);
    }
    return httpParams;
  }
}
