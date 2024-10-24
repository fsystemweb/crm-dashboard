import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stats-cards',
  templateUrl: './stats-cards.component.html',
  styleUrls: ['./stats-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsCardsComponent {}
