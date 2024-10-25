import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserInfo } from 'src/app/shared/models/user-info.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  isExpanded = false;

  user: UserInfo = {
    fullname: 'Alf',
    role: 'CEO',
    picture: 'alf.jpeg',
  };

  toggleSidebar(): void {
    this.isExpanded = !this.isExpanded;
  }
}
