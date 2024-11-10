import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationButtonComponent } from './pagination-button.component';
import { By } from '@angular/platform-browser';
import { ComponentRef } from '@angular/core';

describe('PaginationButtonComponent', () => {
  let component: PaginationButtonComponent;
  let fixture: ComponentFixture<PaginationButtonComponent>;
  let componentRef: ComponentRef<PaginationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginationButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PaginationButtonComponent);
    component = fixture.componentInstance;
    componentRef = fixture.componentRef;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct label', () => {
    componentRef.setInput('label', '5');
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.textContent.trim()).toBe('5');
  });

  it('should apply active class if active input is true', () => {
    componentRef.setInput('active', true);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.classList).toContain('active');
  });

  it('should apply disabled attribute if disabled input is true', () => {
    componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    expect(buttonElement.nativeElement.disabled).toBe(true);
  });

  it('should emit onClick event with label when handleClick is called', () => {
    jest.spyOn(component.onClick, 'emit');

    componentRef.setInput('label', '2');
    component.handleClick();

    expect(component.onClick.emit).toHaveBeenCalledWith('2');
  });

  it('should not emit onClick event if disabled is true', () => {
    jest.spyOn(component.onClick, 'emit');

    componentRef.setInput('label', '3');
    componentRef.setInput('disabled', true);
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('button'));
    buttonElement.nativeElement.click();

    expect(component.onClick.emit).not.toHaveBeenCalled();
  });
});
