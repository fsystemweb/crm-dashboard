import { OverlaySpinnerService } from './overlay-spinner.service';
import { OverlayConfig } from '@angular/cdk/overlay';

describe('OverlaySpinnerService', () => {
  let overlaySpinnerService: OverlaySpinnerService;
  let overlay: any;
  let overlayRefMock: any;

  beforeEach(() => {
    overlayRefMock = { attach: jest.fn() };
    overlay = {
      create: jest.fn(() => overlayRefMock),
      position: jest.fn(() => ({
        global: jest.fn(() => ({
          centerHorizontally: jest.fn(() => ({
            centerVertically: jest.fn(),
          })),
        })),
      })),
    };

    overlaySpinnerService = new OverlaySpinnerService(overlay);
  });

  it('should create an overlay', () => {
    const overlayConfig = {} as OverlayConfig;
    overlaySpinnerService.createOverlay(overlayConfig);

    expect(overlay.create).toHaveBeenCalledWith(overlayConfig);
  });

  it('should return a PositionStrategy for global centering', () => {
    overlaySpinnerService.makeGloballyCenteredPosition();

    expect(overlay.position).toHaveBeenCalled();
  });
});
