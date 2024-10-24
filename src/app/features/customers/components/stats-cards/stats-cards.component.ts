import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsCardsComponent {}
