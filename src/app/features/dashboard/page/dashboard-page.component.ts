import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {}
