import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

export const saveErrorAction = createAction('[ERROR] Save error', props<{ error: HttpErrorResponse }>());
