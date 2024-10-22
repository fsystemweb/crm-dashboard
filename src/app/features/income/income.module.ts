import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncomeRoutingModule } from './income-routing.module';
import { IncomePageComponent } from './page/income-page.component';

@NgModule({
  imports: [IncomeRoutingModule, CommonModule],
  declarations: [IncomePageComponent],
})
export class DashboardModule {}
