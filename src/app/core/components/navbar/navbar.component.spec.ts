import { TestBed } from '@angular/core/testing';

import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

import { NavbarComponent } from './navbar.component';
import { getUserInfo } from 'src/app/state/entities/user-info/user-info.selectors';
import { FormsModule } from '@angular/forms';
import { IconModule } from 'src/app/shared/components/icons/icon.module';
import { ToolbarComponent } from '../toolbar/toolbar.component';
describe('NavbarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, IconModule],
      declarations: [NavbarComponent, ToolbarComponent],
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
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(NavbarComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello Alf');
  });
});
