import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationService } from './notification.service';

describe('NotificationService', () => {
  let service: NotificationService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    const snackBarMock = {
      open: jest.fn().mockReturnValue({
        close: jest.fn(),
      }),
    };

    TestBed.configureTestingModule({
      providers: [NotificationService, { provide: MatSnackBar, useValue: snackBarMock }],
    });

    service = TestBed.inject(NotificationService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call snackBar.open with the correct parameters', () => {
    const message = 'Test Notification';
    service.showNotification(message);

    expect(snackBar.open).toHaveBeenCalledWith(message, 'Close', {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  });

  it('should return a MatSnackBarRef when showNotification is called', () => {
    const message = 'Test Notification';
    const result = service.showNotification(message);

    expect(result).toBeDefined();
  });
});
