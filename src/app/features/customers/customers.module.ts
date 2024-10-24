import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersPageComponent } from './page/customers-page.component';
import { StatsCardsComponent } from './components/stats-cards/stats-cards.component';
import { IconModule } from 'src/app/shared/components/icons/icon.module';
import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { FormsModule } from '@angular/forms';
import { TablePaginationComponent } from './components/table-pagination/table-pagination.component';
import { CustomerFiltersSectionComponent } from './components/customer-filters-section/customer-filters-section.component';

@NgModule({
  imports: [CustomersRoutingModule, CommonModule, IconModule, FormsModule],
  declarations: [CustomersPageComponent, StatsCardsComponent, CustomerTableComponent, TablePaginationComponent, CustomerFiltersSectionComponent],
})
export class CustomersModule {}
