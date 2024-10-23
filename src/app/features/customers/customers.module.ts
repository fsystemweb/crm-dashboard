import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersPageComponent } from './page/customers-page.component';

@NgModule({
  imports: [CustomersRoutingModule, CommonModule],
  declarations: [CustomersPageComponent],
})
export class CustomersModule {}
