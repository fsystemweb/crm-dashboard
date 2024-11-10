import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChangeDetectorRef } from '@angular/core';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.interface';
import { TablePaginationComponent } from './table-pagination.component';
import { getPagination } from 'src/app/state/entities/pagination/pagination.selectors';
import { PaginationButtonComponent } from '../pagination-button/pagination-button.component';

describe('TablePaginationComponent', () => {
  let component: TablePaginationComponent;
  let fixture: ComponentFixture<TablePaginationComponent>;
  let store: MockStore;

  const initialState = {
    pagination: { page: 0, size: 10, totalElements: 100 },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablePaginationComponent, PaginationButtonComponent],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    fixture = TestBed.createComponent(TablePaginationComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store) as MockStore;
    fixture.detectChanges();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the correct total pages based on pagination', () => {
    component.pagination = { page: 0, size: 10, totalElements: 50 };
    (component as any).calculateTotalPages();
    expect(component.totalPages).toBe(5);
    expect(component.pagesArray).toEqual([0, 1, 2, 3, 4]);
  });

  it('should return the correct range start based on page and size', () => {
    component.pagination = { page: 1, size: 10, totalElements: 100 };
    const rangeStart = component.getRangeStart();
    expect(rangeStart).toBe(11);
  });

  it('should return the correct range end based on page, size, and total elements', () => {
    component.pagination = { page: 1, size: 10, totalElements: 15 };
    const rangeEnd = component.getRangeEnd();
    expect(rangeEnd).toBe(15);
  });

  it('should handle paginationEvent for next, previous, and specific page numbers', () => {
    jest.spyOn(component.onPageChange, 'emit');

    component.pagination = { page: 1, size: 10, totalElements: 100 };
    component.paginationEvent('>');
    expect(component.pagination.page).toBe(2);
    expect(component.onPageChange.emit).toHaveBeenCalledWith({
      page: 2,
      size: 10,
      totalElements: 100,
    });

    component.paginationEvent('<');
    expect(component.pagination.page).toBe(1);

    component.paginationEvent('3');
    expect(component.pagination.page).toBe(2);
  });

  it('should update pagination from store selector', () => {
    const paginationData = { page: 0, size: 10, totalElements: 30 };
    store.overrideSelector(getPagination, { pagination: paginationData });
    store.refreshState();

    (component as any).setPagination();
    fixture.detectChanges();

    expect(component.pagination).toEqual(paginationData);
    expect(component.totalPages).toBe(3);
  });
});
