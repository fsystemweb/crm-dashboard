import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';
import { UserInfo } from 'src/app/shared/models/user-info.interface';
import { IconModule } from 'src/app/shared/components/icons/icon.module';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { UserPicturePathPipe } from 'src/app/shared/pipes/user-picture-path.pipe';
import { UserRolePipe } from 'src/app/shared/pipes/user-role.pipe';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [IconModule, UserPicturePathPipe, UserRolePipe],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default properties', () => {
    expect(component.isExpanded).toBe(false);
    expect(component.user).toEqual<UserInfo>({
      fullname: 'Alf',
      role: 'CEO',
      picture: 'alf.jpeg',
    });
  });

  it('should toggle isExpanded when toggleSidebar is called', () => {
    expect(component.isExpanded).toBe(false);
    component.toggleSidebar();
    expect(component.isExpanded).toBe(true);
    component.toggleSidebar();
    expect(component.isExpanded).toBe(false);
  });
});