import { ChangeDetectionStrategy, Component, inject, DestroyRef, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/shared/models/user-info.interface';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppState } from 'src/app/core/state/app.reducer';
import { getUserInfo } from 'src/app/core/state/user-info/user-info.selectors';
import { fetchUserInfo, savedUserInfo } from 'src/app/core/state/user-info/user-info.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements OnInit {
  private store: Store<AppState> = inject(Store);
  private destroyRef = inject(DestroyRef);

  isExpanded = false;

  user: UserInfo = {
    fullname: 'Alf',
    role: 'CEO',
    picture: 'alf.jpeg',
  };

  ngOnInit(): void {
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
