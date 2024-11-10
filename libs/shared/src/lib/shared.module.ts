import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { paginationReducer } from './state';

@NgModule({
  imports: [StoreModule.forFeature('pagination', paginationReducer)],
})
export class SharedModule {}
