import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipseText',
  standalone: true,
})
export class EllipseTextPipe implements PipeTransform {
  transform(text: string | undefined, length = 15): string {
    if (!text) {
      return '';
    }

    if (text.length > length) {
      const substring = text.substring(0, length - 3);
      return substring + '...';
    }

    return text;
  }
}
