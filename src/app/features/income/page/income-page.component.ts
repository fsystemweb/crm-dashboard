import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-income-page',
  templateUrl: './income-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IncomePageComponent {}
