import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductPageComponent } from './page/product-page.component';

@NgModule({
  imports: [ProductRoutingModule, CommonModule],
  declarations: [ProductPageComponent],
})
export class ProductModule {}
