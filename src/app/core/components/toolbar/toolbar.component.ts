import { ChangeDetectionStrategy, Component, inject, HostListener, ElementRef } from '@angular/core';

import { MenuItem } from '../../models/menu-item.interface';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [style({ opacity: 0 }), animate('100ms ease-in', style({ opacity: 1 }))]),
      transition(':leave', [animate('100ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
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
