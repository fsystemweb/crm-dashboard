import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { Icon, iconRegistry } from './models/icon';

const iconPath = (iconName: string): string => `/icons/${iconName}.svg`;

@NgModule({
  imports: [MatIconModule],
  exports: [MatIconModule],
})
export class IconModule {
  constructor(private domSanitizer: DomSanitizer, private matIconRegistry: MatIconRegistry) {
    this.registerIcons(iconRegistry);
  }

  private registerIcons(icons: Icon[]): void {
    icons.forEach((iconName) => {
      this.matIconRegistry.addSvgIcon(iconName, this.domSanitizer.bypassSecurityTrustResourceUrl(iconPath(iconName)));
    });
  }
}
