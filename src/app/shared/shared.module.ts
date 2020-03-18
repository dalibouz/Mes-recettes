import {NgModule} from '@angular/core';
import {EnumsToArrayPipe} from './enums-to-array.pipe';
import {DropdownDirective} from './dropdown.directive';

@NgModule({
  declarations: [DropdownDirective, EnumsToArrayPipe],
  exports: [DropdownDirective, EnumsToArrayPipe]
})
export class SharedModule {}
