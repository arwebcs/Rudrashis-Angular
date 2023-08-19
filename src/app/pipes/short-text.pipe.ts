import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText',
})
export class ShortTextPipe implements PipeTransform {
  transform(value: string, size: number = 3): unknown {
    return value.substring(0, size) + '.....';
  }
}
