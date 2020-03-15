import { NgModule } from '@angular/core';
import { UnitModule } from './units/unit.module';
import { ProductModule } from './product/product.module';

@NgModule({
  imports: [UnitModule, ProductModule]
})
export class ConfigModule { }
