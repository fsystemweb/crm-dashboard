import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-help-page',
  templateUrl: './help-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelpPageComponent {}
