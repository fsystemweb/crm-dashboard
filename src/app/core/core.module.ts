import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { IconModule } from '../shared/components/icons/icon.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [RouterModule, RouterLinkWithHref, CommonModule, IconModule, FormsModule],
  declarations: [NavbarComponent, SidebarComponent, LayoutComponent],
  exports: [NavbarComponent, SidebarComponent, LayoutComponent],
  providers: [],
})
export class CoreModule {}
