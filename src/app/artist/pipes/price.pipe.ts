import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  // TODO: Handle more locales.
  // FIXME: Cache the number formatter instance globally, it doesn't need to be created for every pipe.
  intl = new Intl.NumberFormat('sv-SE');
  transform(value: number, ...args: unknown[]): string {
    return this.intl.format(value);
  }
}
