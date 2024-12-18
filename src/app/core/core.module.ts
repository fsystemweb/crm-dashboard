import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ErrorHandlerService } from './services/error-handler.service';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { IconModule, SpinnerOverlayComponent, UserPicturePathPipe, UserRolePipe } from '@crm-dashboard/shared';

@NgModule({
  imports: [
    RouterModule,
    RouterLinkWithHref,
    CommonModule,
    IconModule,
    FormsModule,
    MatTooltipModule,
    UserPicturePathPipe,
    UserRolePipe,
    SpinnerOverlayComponent,
  ],
  declarations: [NavbarComponent, SidebarComponent, LayoutComponent, ToolbarComponent],
  exports: [NavbarComponent, SidebarComponent, LayoutComponent],
  providers: [ErrorHandlerService],
})
export class CoreModule {
  constructor(private errorHandlerService: ErrorHandlerService) {
    errorHandlerService.monitorErrorChanges();
  }
}
