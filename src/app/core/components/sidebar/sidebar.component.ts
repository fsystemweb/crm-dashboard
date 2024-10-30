import { ChangeDetectionStrategy, Component, inject, DestroyRef } from '@angular/core';
import { UserInfo } from 'src/app/shared/models/user-info.interface';
import { Store } from '@ngrx/store';
import { filter, map, Observable } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppState } from 'src/app/state/app.reducer';
import { getUserInfo } from 'src/app/state/entities/user-info/user-info.selectors';
import { fetchUserInfo, savedUserInfo } from 'src/app/state/entities/user-info/user-info.actions';
import { Icon } from 'src/app/shared/components/icons/models/icon';

interface MenuItem {
  route: string;
  icon: Icon;
  title: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  private store: Store<AppState> = inject(Store);
  private destroyRef = inject(DestroyRef);

  isExpanded = false;

  user: UserInfo = {
    fullname: '',
    role: '',
    picture: '',
  };

  loading$: Observable<boolean> = this.store.select(getUserInfo).pipe(map(({ loadingUserInfo }) => loadingUserInfo));

  menuItems: MenuItem[] = [
    {
      route: '/home',
      icon: 'key',
      title: 'Dashboard',
    },
    {
      route: '/product',
      icon: 'cube',
      title: 'Product',
    },
    {
      route: '/customers',
      icon: 'user',
      title: 'Customers',
    },
    {
      route: '/income',
      icon: 'wallet',
      title: 'Income',
    },
    {
      route: '/promote',
      icon: 'promote',
      title: 'Promote',
    },
    {
      route: '/help',
      icon: 'help',
      title: 'Help',
    },
  ];

  constructor() {
    this.store.dispatch(fetchUserInfo());
    this.setUserInfo();
  }

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }

  private setUserInfo(): void {
    this.store
      .select(getUserInfo)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(({ loadedUserInfo }) => loadedUserInfo)
      )
      .subscribe(({ userInfo }) => {
        if (!userInfo) {
          return;
        }

        this.user = userInfo as UserInfo;

        this.store.dispatch(savedUserInfo());
      });
  }
}
