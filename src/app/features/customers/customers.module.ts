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
import { PercentageIndicatorComponent } from './components/percentage-indicator/percentage-indicator.component';
import { UserPicturePathPipe } from 'src/app/shared/pipes/user-picture-path.pipe';
import { MathAbsPipe } from 'src/app/shared/pipes/math-abs.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserRolePipe } from 'src/app/shared/pipes/user-role.pipe';

@NgModule({
  imports: [CustomersRoutingModule, CommonModule, IconModule, FormsModule, UserPicturePathPipe, MathAbsPipe, MatTooltipModule, UserRolePipe],
  declarations: [
    CustomersPageComponent,
    StatsCardsComponent,
    CustomerTableComponent,
    TablePaginationComponent,
    CustomerFiltersSectionComponent,
    PercentageIndicatorComponent,
  ],
})
export class CustomersModule {}
