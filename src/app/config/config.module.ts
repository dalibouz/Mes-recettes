import { NgModule } from '@angular/core';
import { UnitModule } from './units/unit.module';

@NgModule({
  imports: [UnitModule],
  exports: [UnitModule]
})
export class ConfigModule { }
