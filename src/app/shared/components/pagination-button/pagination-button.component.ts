import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Pagination } from 'src/app/shared/models/pagination.interface';
import { AppState } from 'src/app/state/app.reducer';
import { getPagination } from 'src/app/state/entities/pagination/pagination.selectors';

@Component({
  selector: 'app-pagination-button',
  templateUrl: './pagination-button.component.html',
  styleUrls: ['./pagination-button.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationButtonComponent {
  label = input<string>();
  active = input<boolean>();

  onClick = output<string>();

  handleClick(): void {
    this.onClick.emit(this.label() || '');
  }
}
