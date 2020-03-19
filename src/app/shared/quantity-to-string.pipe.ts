import { Pipe, PipeTransform } from '@angular/core';
import { QuantityModel } from './quantity.model';

@Pipe({ name: 'quantityToString' })
export class QuantityToStringPipe implements PipeTransform {
  transform(quantity: QuantityModel): Object {
    let quantityString = '';
    if (quantity) {
      quantityString += quantity.amount;
      if (quantity.unit) {
        quantityString += quantity.unit.symbol;
      }
    }
    return quantityString;
  }
}
