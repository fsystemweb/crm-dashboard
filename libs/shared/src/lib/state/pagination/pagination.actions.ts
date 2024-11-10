import { createAction, props } from '@ngrx/store';
import { Pagination } from '../../models/pagination.interface';

export const setPagination = createAction('[Pagination] set', props<{ pagination: Pagination }>());
