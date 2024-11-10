import { createAction, props } from '@ngrx/store';
import { Pagination } from '@crm-dashboard/shared';

export const setPagination = createAction('[Pagination] set', props<{ pagination: Pagination }>());
