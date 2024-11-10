import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, output } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Store } from '@ngrx/store';
import { Pagination } from '../../models/pagination.interface';
import { getPagination } from '../../state/pagination/pagination.selectors';
import { PaginationButtonComponent } from '../pagination-button/pagination-button.component';
import { PaginationState } from '../../state';

@Component({
  selector: 'app-table-pagination',
  templateUrl: './table-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PaginationButtonComponent],
})
export class TablePaginationComponent {
  private store: Store<PaginationState> = inject(Store);
  private destroyRef = inject(DestroyRef);
  private ref = inject(ChangeDetectorRef);

  onPageChange = output<Pagination>();

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

  paginationEvent(pageSelected: string): void {
    const newPagination = { ...this.pagination };
    let pageNumber = 0;

    if (pageSelected === '<') {
      pageNumber = this.pagination.page - 1;
    }

    if (pageSelected === '>') {
      pageNumber = this.pagination.page + 1;
    }

    if (pageSelected !== '<' && pageSelected !== '>') {
      pageNumber = Number(pageSelected) - 1;
    }

    newPagination.page = pageNumber;
    this.refreshPagination(newPagination);
    this.onPageChange.emit(newPagination);
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
