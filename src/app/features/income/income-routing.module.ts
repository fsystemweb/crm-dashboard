import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomePageComponent } from './page/income-page.component';

const routes: Routes = [
  {
    path: '',
    component: IncomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeRoutingModule {}
