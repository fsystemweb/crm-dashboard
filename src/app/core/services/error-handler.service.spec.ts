import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ErrorHandlerService } from './error-handler.service';
import { NotificationService } from './notification.service';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { AppState } from 'src/app/state/app.reducer';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import { getErrors } from 'src/app/state/error/error.selector';
import { Store } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;
  let mockStore: MockStore<AppState>;
  let notificationService: NotificationService;

  beforeEach(() => {
    notificationService = {
      showNotification: jest.fn(),
    } as unknown as NotificationService;

    TestBed.configureTestingModule({
      providers: [ErrorHandlerService, { provide: NotificationService, useValue: notificationService }, provideMockStore({})],
    });

    service = TestBed.inject(ErrorHandlerService);
    mockStore = TestBed.inject(Store) as MockStore<AppState>;
  });

  it('should show a notification when an error is emitted', fakeAsync(() => {
    const errorResponse = new HttpErrorResponse({
      error: { message: 'Http failure response for (unknown url): 500 Internal Server Error' },
      status: 500,
      statusText: 'Internal Server Error',
    });

    mockStore.overrideSelector(getErrors, {
      response: errorResponse,
    });

    service.monitorErrorChanges();

    tick(450);

    expect(notificationService.showNotification).toHaveBeenCalledWith('Error: Http failure response for (unknown url): 500 Internal Server Error');
  }));

  it('should show a default notification if no message is present', fakeAsync(() => {
    mockStore.overrideSelector(getErrors, {
      response: undefined,
    });

    service.monitorErrorChanges();

    tick(450);

    expect(notificationService.showNotification).toHaveBeenCalledWith('Error: We are experiencing technical issues. Please try again later');
  }));
});
