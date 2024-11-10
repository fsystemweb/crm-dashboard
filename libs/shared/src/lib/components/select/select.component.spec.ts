import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectComponent } from './select.component';
import { ComponentRef } from '@angular/core';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { SelectItem } from '../../models/select-item.interface';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let componentRef: ComponentRef<SelectComponent>;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should initialize with the first option as selected if options are provided', () => {
    const options: SelectItem[] = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ];

    componentRef.setInput('options', options);
    fixture.detectChanges();

    expect(component.selectedValue).toEqual(options[0]);
  });

  it('should toggle the dropdown state when toggleDropdown is called', () => {
    component.isDropdownOpen = false;
    component.toggleDropdown();
    expect(component.isDropdownOpen).toBe(true);

    component.toggleDropdown();
    expect(component.isDropdownOpen).toBe(false);
  });

  it('should select an option and emit selectionChange event', () => {
    jest.spyOn(component.selectionChange, 'emit');
    const option: SelectItem = { value: '2', label: 'Option 2' };

    component.selectOption(option);
    fixture.detectChanges();

    expect(component.selectedValue).toEqual(option);
    expect(component.isDropdownOpen).toBe(false);
    expect(component.selectionChange.emit).toHaveBeenCalledWith(option.value);
  });

  it('should update selectedValue when options change', () => {
    const options: SelectItem[] = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
    ];

    componentRef.setInput('options', options);
    fixture.detectChanges();

    expect(component.selectedValue).toEqual(options[0]);
  });
});
