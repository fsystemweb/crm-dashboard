import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromotePageComponent } from './page/promote-page.component';

const routes: Routes = [
  {
    path: '',
    component: PromotePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PromoteRoutingModule {}
