import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-percentage-indicator',
  templateUrl: './percentage-indicator.component.html',
  styleUrls: ['./percentage-indicator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PercentageIndicatorComponent {
  indicator = input.required<number>();
}
