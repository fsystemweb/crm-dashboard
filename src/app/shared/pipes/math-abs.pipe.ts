import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mathAbs',
  standalone: true,
})
class MathAbsPipe implements PipeTransform {
  transform(value: number): number {
    if (!value) {
      return 0;
    }

    return Math.abs(value);
  }
}

export { MathAbsPipe };
