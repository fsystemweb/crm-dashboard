import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, RouterLinkWithHref],
  declarations: [NavbarComponent, SidebarComponent, LayoutComponent],
  exports: [NavbarComponent, SidebarComponent, LayoutComponent],
  providers: [],
})
export class CoreModule {}
