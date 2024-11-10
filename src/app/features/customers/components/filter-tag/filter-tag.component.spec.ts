import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FilterTagComponent } from './filter-tag.component';
import { ComponentRef } from '@angular/core';

import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EllipsisTextPipe, IconModule } from '@crm-dashboard/shared';

describe('FilterTagComponent', () => {
  let component: FilterTagComponent;
  let componentRef: ComponentRef<FilterTagComponent>;
  let fixture: ComponentFixture<FilterTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilterTagComponent],
      imports: [EllipsisTextPipe, IconModule, MatTooltipModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(FilterTagComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should emit tag value on handleClick if tag is defined', () => {
    jest.spyOn(component.onClick, 'emit');
    componentRef.setInput('tag', 'sample-tag');
    fixture.detectChanges();

    component.handleClick();
    expect(component.onClick.emit).toHaveBeenCalledWith('sample-tag');
  });

  it('should not emit if tag is not defined', () => {
    jest.spyOn(component.onClick, 'emit');
    componentRef.setInput('tag', '');
    fixture.detectChanges();

    component.handleClick();
    expect(component.onClick.emit).not.toHaveBeenCalled();
  });

  it('should return true from showTooltip if tag length exceeds or matches tagLengthDisplay', () => {
    componentRef.setInput('tag', 'This is a very long tag');
    fixture.detectChanges();

    expect(component.showTooltip()).toBe(true);
  });

  it('should return false from showTooltip if tag length is less than tagLengthDisplay', () => {
    componentRef.setInput('tag', 'Short tag');
    fixture.detectChanges();

    expect(component.showTooltip()).toBe(false);
  });
});
