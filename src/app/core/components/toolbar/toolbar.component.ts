import { ChangeDetectionStrategy, Component, inject, HostListener, ElementRef } from '@angular/core';

import { MenuItem } from '../../models/menu-item.interface';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  private elementRef = inject(ElementRef);
  isExpanded = false;

  menuItems: MenuItem[] = [
    {
      route: '/home',
      icon: 'key',
      title: 'Dashboard',
    },
    {
      route: '/product',
      icon: 'cube',
      title: 'Product',
    },
    {
      route: '/customers',
      icon: 'user',
      title: 'Customers',
    },
    {
      route: '/income',
      icon: 'wallet',
      title: 'Income',
    },
    {
      route: '/promote',
      icon: 'promote',
      title: 'Promote',
    },
    {
      route: '/help',
      icon: 'help',
      title: 'Help',
    },
  ];

  toggleToolbar(): void {
    this.isExpanded = !this.isExpanded;
  }

  closeToolbar(): void {
    this.isExpanded = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    if (this.isExpanded && !this.elementRef.nativeElement.contains(event.target)) {
      this.isExpanded = false;
    }
  }
}
