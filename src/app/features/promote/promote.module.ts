import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromoteRoutingModule } from './promote-routing.module';
import { PromotePageComponent } from './page/promote-page.component';

@NgModule({
  imports: [PromoteRoutingModule, CommonModule],
  declarations: [PromotePageComponent],
})
export class PromoteModule {}
