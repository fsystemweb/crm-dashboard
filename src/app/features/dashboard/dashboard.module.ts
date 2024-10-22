import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './page/dashboard-page.component';

@NgModule({
  imports: [DashboardRoutingModule, CommonModule],
  declarations: [DashboardPageComponent],
})
export class DashboardModule {}
