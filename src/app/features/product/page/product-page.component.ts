import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './product-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPageComponent {}
