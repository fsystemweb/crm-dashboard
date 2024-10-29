import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Pagination } from 'src/app/shared/models/pagination.interface';
import { AppState } from 'src/app/state/app.reducer';
import { getPagination } from 'src/app/state/entities/pagination/pagination.selectors';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TablePaginationComponent {
  private store: Store<AppState> = inject(Store);
  private destroyRef = inject(DestroyRef);
  private ref = inject(ChangeDetectorRef);

  totalPages = 0;
  pagesArray: number[] = [];

  pagination: Pagination = {
    page: 0,
    size: 10,
  };

  constructor() {
    this.setPagination();
  }

  getRangeStart(): number {
    const startIndex = this.pagination.page * this.pagination.size + 1;
    return startIndex;
  }

  getRangeEnd(): number {
    const endIndex = Math.min((this.pagination.page + 1) * this.pagination.size, this.pagination.totalElements || 0);
    return endIndex;
  }

  paginationEvent(pageNumber: string): void {
    const newPagination = { ...this.pagination };
    // TODO: Cast page
    newPagination.page = Number(pageNumber) - 1;
    this.pagination = newPagination;
  }

  private setPagination(): void {
    this.store
      .select(getPagination)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ pagination }) => {
        if (!pagination) {
          return;
        }
        this.refreshPagination(pagination);
      });
  }

  private calculateTotalPages(): void {
    this.totalPages = Math.ceil((this.pagination.totalElements || 0) / this.pagination.size);
    this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i);
  }

  private refreshPagination(pagination: Pagination): void {
    this.pagination = pagination;
    this.calculateTotalPages();
    this.ref.markForCheck();
  }
}
