import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from './sidebar.component';

import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

import { provideMockStore } from '@ngrx/store/testing';
import { getUserInfo } from 'src/app/state/entities/user-info/user-info.selectors';
import { IconModule, SpinnerOverlayComponent, UserInfo, UserPicturePathPipe, UserRolePipe } from '@crm-dashboard/shared';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarComponent],
      imports: [IconModule, UserPicturePathPipe, UserRolePipe, SpinnerOverlayComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideMockStore({
          selectors: [
            {
              selector: getUserInfo,
              value: {
                loadedUserInfo: true,
                userInfo: {
                  fullname: 'Alf',
                  role: 'CEO',
                  picture: 'alf.jpeg',
                },
              },
            },
          ],
        }),
      ],
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
