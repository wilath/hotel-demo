// skracacz.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortenText'
})
export class ShortenTextPipe implements PipeTransform {
  transform(value: string, maxLength: number = 50): string {
    if (value.length <= maxLength) {
      return value;
    } else {
      return value.substring(0, maxLength) + ' . . .';
    }
  }
}
