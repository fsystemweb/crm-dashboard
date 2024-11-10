import { OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, Component, DoCheck, OnInit, TemplateRef, ViewContainerRef, inject, input, viewChild } from '@angular/core';
import { OverlaySpinnerService } from '../services/overlay-spinner.service';
import { SpinnerComponent } from '../spinner/spinner.component';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SpinnerComponent],
})
export class SpinnerOverlayComponent implements OnInit, DoCheck {
  private vcRef = inject(ViewContainerRef);
  private overlaySpinnerService = inject(OverlaySpinnerService);

  diameter = input(40);
  strokeWidth = input(3);
  displayProgressSpinner = input.required<boolean>();

  private progressSpinnerRef = viewChild.required<TemplateRef<HTMLElement>>('progressSpinnerRef');

  private progressSpinnerOverlayConfig!: OverlayConfig;
  private overlayRef!: OverlayRef;

  ngOnInit(): void {
    this.progressSpinnerOverlayConfig = { hasBackdrop: true };

    this.progressSpinnerOverlayConfig['positionStrategy'] = this.overlaySpinnerService.makeGloballyCenteredPosition();

    this.overlayRef = this.overlaySpinnerService.createOverlay(this.progressSpinnerOverlayConfig);
  }

  ngDoCheck(): void {
    if (this.shouldAttachSpinner()) {
      this.overlaySpinnerService.attachTemplatePortal(this.overlayRef, this.progressSpinnerRef(), this.vcRef);
    } else if (this.shouldDetachSpinner()) {
      this.overlayRef.detach();
    }
  }

  private shouldAttachSpinner(): boolean {
    return this.displayProgressSpinner() && !this.overlayRef.hasAttached();
  }

  private shouldDetachSpinner(): boolean {
    return !this.displayProgressSpinner() && this.overlayRef.hasAttached();
  }
}
