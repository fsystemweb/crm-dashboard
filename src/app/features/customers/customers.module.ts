import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersPageComponent } from './page/customers-page.component';
import { StatsCardsComponent } from './components/stats-cards/stats-cards.component';

@NgModule({
  imports: [CustomersRoutingModule, CommonModule],
  declarations: [CustomersPageComponent, StatsCardsComponent],
})
export class CustomersModule {}
