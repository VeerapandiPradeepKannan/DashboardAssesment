import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rename'
})
export class RenamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    if (value.includes('_')) {
      return value.replace(/_/g, ' ')
    }
    return value;
  }

}
