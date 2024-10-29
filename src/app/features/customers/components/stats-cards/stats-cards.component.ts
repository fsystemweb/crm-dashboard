import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject } from '@angular/core';
import { StatsCards } from '../../models/stats-cards.interface';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.reducer';
import { getStatsCards } from 'src/app/state/stats-cards/stats-cards.selectors';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs';
import { fetchStatsCards, savedStatsCards } from 'src/app/state/stats-cards/stats-cards.actions';

@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsCardsComponent {
  private store: Store<AppState> = inject(Store);
  private destroyRef = inject(DestroyRef);
  private ref = inject(ChangeDetectorRef);

  statsCards: StatsCards = {
    totalCustomer: 0,
    customerPercentage: 0,
    totalMembers: 0,
    membersPercentage: 0,
    totalUserActive: 0,
    userActives: [],
  };

  constructor() {
    this.store.dispatch(fetchStatsCards());
    this.setStatsCards();
  }

  private setStatsCards(): void {
    this.store
      .select(getStatsCards)
      .pipe(
        takeUntilDestroyed(this.destroyRef),
        filter(({ loadedStatsCards }) => loadedStatsCards)
      )
      .subscribe(({ statsCards }) => {
        if (!statsCards) {
          return;
        }
        this.statsCards = statsCards as StatsCards;

        this.ref.markForCheck();

        this.store.dispatch(savedStatsCards());
      });
  }
}
