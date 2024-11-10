import { ChangeDetectionStrategy, Component, inject, DestroyRef, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AppState } from '../../../state/app.reducer';
import { getUserInfo } from '../../../state/entities/user-info/user-info.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private store: Store<AppState> = inject(Store);
  private destroyRef = inject(DestroyRef);
  private ref = inject(ChangeDetectorRef);

  username = '';
  searchInput = '';

  constructor() {
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
        this.ref.markForCheck();
      });
  }
}
