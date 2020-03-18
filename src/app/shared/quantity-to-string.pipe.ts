import { Pipe, PipeTransform } from '@angular/core';
import { QuantityModel } from './quantity.model';

@Pipe({ name: 'quantityToString' })
export class QuantityToStringPipe implements PipeTransform {
  transform(quantity: QuantityModel): Object {
    if (quantity) {
      return quantity.amount + ' ' + quantity.unit.symbol;
    }
    return '';
  }
}
