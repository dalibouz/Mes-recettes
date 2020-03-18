import {NgModule} from '@angular/core';
import {EnumsToArrayPipe} from './enums-to-array.pipe';
import {DropdownDirective} from './dropdown.directive';
import { QuantityToStringPipe } from './quantity-to-string.pipe';

@NgModule({
  declarations: [DropdownDirective, EnumsToArrayPipe, QuantityToStringPipe],
  exports: [DropdownDirective, EnumsToArrayPipe, QuantityToStringPipe]
})
export class SharedModule {}
