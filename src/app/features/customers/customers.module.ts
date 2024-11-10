import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersPageComponent } from './page/customers-page.component';
import { StatsCardsComponent } from './components/stats-cards/stats-cards.component';

import { CustomerTableComponent } from './components/customer-table/customer-table.component';
import { FormsModule } from '@angular/forms';

import { CustomerFiltersSectionComponent } from './components/customer-filters-section/customer-filters-section.component';
import { PercentageIndicatorComponent } from './components/percentage-indicator/percentage-indicator.component';

import { MatTooltipModule } from '@angular/material/tooltip';

import { FilterTagComponent } from './components/filter-tag/filter-tag.component';
import { CustomerStatusComponent } from './components/customer-status/customer-status.component';
import {
  EllipsisTextPipe,
  IconModule,
  MathAbsPipe,
  SelectComponent,
  SpinnerOverlayComponent,
  TablePaginationComponent,
  UserPicturePathPipe,
  UserRolePipe,
} from '@crm-dashboard/shared';

@NgModule({
  imports: [
    CustomersRoutingModule,
    CommonModule,
    IconModule,
    FormsModule,
    UserPicturePathPipe,
    MathAbsPipe,
    MatTooltipModule,
    UserRolePipe,
    SelectComponent,
    EllipsisTextPipe,
    TablePaginationComponent,
    SpinnerOverlayComponent,
    DecimalPipe,
  ],
  declarations: [
    CustomersPageComponent,
    StatsCardsComponent,
    CustomerTableComponent,
    CustomerFiltersSectionComponent,
    PercentageIndicatorComponent,
    FilterTagComponent,
    CustomerStatusComponent,
  ],
})
export class CustomersModule {}
