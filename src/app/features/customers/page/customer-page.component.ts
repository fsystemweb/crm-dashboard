import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './customer-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerPageComponent {}
