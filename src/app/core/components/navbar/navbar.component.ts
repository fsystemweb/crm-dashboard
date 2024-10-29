import { ChangeDetectionStrategy, Component, inject, DestroyRef, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppState } from 'src/app/core/state/app.reducer';
import { getUserInfo } from 'src/app/core/state/user-info/user-info.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  private store: Store<AppState> = inject(Store);
  private destroyRef = inject(DestroyRef);

  username = '';
  searchInput = '';

  ngOnInit(): void {
    this.setUsername();
  }

  private setUsername(): void {
    this.store
      .select(getUserInfo)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(({ loadedUserInfo }) => loadedUserInfo)
      )
      .subscribe(({ userInfo }) => {
        if (!userInfo || !userInfo.fullname) {
          return;
        }
        this.username = userInfo.fullname;
      });
  }
}
