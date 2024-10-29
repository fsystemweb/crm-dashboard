import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerFiltersSectionComponent } from './customer-filters-section.component';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SelectComponent } from '../../../../shared/components/select/select.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IconModule } from 'src/app/shared/components/icons/icon.module';

describe('CustomerFiltersSectionComponent', () => {
  let component: CustomerFiltersSectionComponent;
  let fixture: ComponentFixture<CustomerFiltersSectionComponent>;
  let notificationServiceMock: { showNotification: jest.Mock };

  beforeEach(async () => {
    notificationServiceMock = { showNotification: jest.fn() };

    await TestBed.configureTestingModule({
      declarations: [CustomerFiltersSectionComponent],
      providers: [{ provide: NotificationService, useValue: notificationServiceMock }, provideHttpClient(), provideHttpClientTesting()],
      imports: [SelectComponent, FormsModule, IconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerFiltersSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should update sortSelected value on updateSortValue', () => {
    const newValue = 'status';
    component.updateSortValue(newValue);
    expect(component.sortSelected).toBe(newValue);
  });

  it('should add a tag if the input is valid', () => {
    component.searchInput = 'New Tag';
    jest.spyOn(component as any, 'isInputValid').mockReturnValue(true);

    component.addTag();
    expect(component.tags).toContain('New Tag');
    expect(component.searchInput).toBe('');
  });

  it('should not add a tag if the input is invalid', () => {
    component.searchInput = 'Invalid Tag';
    jest.spyOn(component as any, 'isInputValid').mockReturnValue(false);

    component.addTag();
    expect(component.tags).not.toContain('Invalid Tag');
  });

  it('should remove a specified tag', () => {
    component.tags = ['Tag1', 'Tag2', 'Tag3'];
    component.removeTag('Tag2');
    expect(component.tags).toEqual(['Tag1', 'Tag3']);
  });

  it('should validate input as invalid if tag is a duplicate', () => {
    component.tags = ['Duplicate'];
    component.searchInput = 'Duplicate';

    component.addTag();

    expect(component['isTagDuplicate']()).toBe(true);
    expect(notificationServiceMock.showNotification).toHaveBeenCalledWith('Error-> Duplicate tag: Duplicate');
  });

  it('should validate input as invalid if maximum tag count is reached', () => {
    component.tags = Array(component['maxTags']).fill('Tag');
    component.searchInput = 'New Tag';

    component.addTag();

    expect(component['isMaxTagCountReached']()).toBe(true);
    expect(notificationServiceMock.showNotification).toHaveBeenCalledWith(`Error-> Maximum tag count reached: ${component['maxTags']}`);
  });

  it('should validate input as invalid if tag length exceeds maxTagLength', () => {
    component.searchInput = 'a'.repeat(component['maxTagLength'] + 1);

    component.addTag();

    expect(component['isTagLengthExceeded']()).toBe(true);
    expect(notificationServiceMock.showNotification).toHaveBeenCalledWith(`Error-> Maximum tag length exceeded: ${component['maxTagLength']}`);
  });
});
