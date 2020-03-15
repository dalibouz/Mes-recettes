import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { UnitsComponent } from './units.component';
import { RouterModule } from '@angular/router';
import { unitRoute } from './unit.route';
import { UnitListComponent } from './unit-list/unit-list.component';
import { UnitDetailsComponent } from './unit-detail/unit-details.component';
import { UnitService } from './unit.service';
import { UnitItemComponent } from './unit-list/unit-item/unit-item.component';
import { BrowserModule } from '@angular/platform-browser';
import { UnitEditComponent } from './unit-edit/unit-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ENTITY_STATES = [...unitRoute];

@NgModule({
  imports: [RouterModule.forChild(ENTITY_STATES), BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [UnitsComponent, UnitListComponent, UnitDetailsComponent, UnitItemComponent, UnitEditComponent],
  providers: [UnitService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UnitModule { }
