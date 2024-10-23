import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    title: 'home',
    loadChildren: () => import('./features/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'product',
    title: 'Product',
    loadChildren: () => import('./features/product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'customers',
    title: 'Customers',
    loadChildren: () => import('./features/customers/customers.module').then((m) => m.CustomersModule),
  },
  {
    path: 'income',
    title: 'Income',
    loadChildren: () => import('./features/income/income.module').then((m) => m.IncomeModule),
  },
  {
    path: 'promote',
    title: 'Promote',
    loadChildren: () => import('./features/promote/promote.module').then((m) => m.PromoteModule),
  },
  {
    path: 'help',
    title: 'Help',
    loadChildren: () => import('./features/help/help.module').then((m) => m.HelpModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    /*   {
      provide: TitleStrategy,
      useClass: PageTitleStrategy,
    },*/
  ],
})
class AppRoutingModule {}

export { AppRoutingModule, routes };
