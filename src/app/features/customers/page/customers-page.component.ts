import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './customers-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersPageComponent {}
