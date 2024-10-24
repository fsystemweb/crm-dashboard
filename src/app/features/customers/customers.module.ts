import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersPageComponent } from './page/customers-page.component';
import { StatsCardsComponent } from './components/stats-cards/stats-cards.component';
import { IconModule } from 'src/app/shared/components/icons/icon.module';

@NgModule({
  imports: [CustomersRoutingModule, CommonModule, IconModule],
  declarations: [CustomersPageComponent, StatsCardsComponent],
})
export class CustomersModule {}
