import { DestroyRef, inject, Injectable } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { NotificationService } from './notification.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';
import { getErrors } from 'src/app/state/error/error.selector';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { debounceTime } from 'rxjs';

@Injectable()
export class ErrorHandlerService {
  private store: Store<AppState> = inject(Store);
  private destroyRef = inject(DestroyRef);
  private notificationService = inject(NotificationService);

  monitorErrorChanges(): void {
    this.store
      .select(getErrors)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        debounceTime(400),
        distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
      )
      .subscribe((error) => {
        if (!error) {
          return;
        }

        let errorMessage = error.response?.message || error.response?.error;

        if (!errorMessage) {
          errorMessage = 'We are experiencing technical issues. Please try again later';
        }

        this.showError(errorMessage);
      });
  }

  private showError(message: string): MatSnackBarRef<unknown> {
    return this.notificationService.showNotification('Error: ' + message);
  }
}
