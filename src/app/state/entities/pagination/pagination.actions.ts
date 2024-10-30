import { createAction, props } from '@ngrx/store';
import { Pagination } from 'src/app/shared/models/pagination.interface';

export const setPagination = createAction('[Pagination] set', props<{ pagination: Pagination }>());
