import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpRoutingModule } from './help-routing.module';
import { HelpPageComponent } from './page/help-page.component';

@NgModule({
  imports: [HelpRoutingModule, CommonModule],
  declarations: [HelpPageComponent],
})
export class HelpModule {}
