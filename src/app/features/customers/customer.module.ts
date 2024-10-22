import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerPageComponent } from './page/customer-page.component';

@NgModule({
  imports: [CustomerRoutingModule, CommonModule],
  declarations: [CustomerPageComponent],
})
export class DashboardModule {}
