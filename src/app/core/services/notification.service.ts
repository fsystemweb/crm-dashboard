import { inject, Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private snackBar = inject(MatSnackBar);

  showNotification(message: string): MatSnackBarRef<unknown> {
    return this.snackBar.open(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }
}
