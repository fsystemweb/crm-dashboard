import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToolbarComponent } from './toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { IconModule } from '@crm-dashboard/shared';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [BrowserAnimationsModule, IconModule],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with isExpanded as false', () => {
    expect(component.isExpanded).toBe(false);
  });

  it('should toggle isExpanded when toggleToolbar is called', () => {
    component.toggleToolbar();
    expect(component.isExpanded).toBe(true);

    component.toggleToolbar();
    expect(component.isExpanded).toBe(false);
  });

  it('should set isExpanded to false when closeToolbar is called', () => {
    component.isExpanded = true;
    component.closeToolbar();
    expect(component.isExpanded).toBe(false);
  });

  it('should have the correct number of menu items', () => {
    expect(component.menuItems.length).toBe(6);
  });
});
