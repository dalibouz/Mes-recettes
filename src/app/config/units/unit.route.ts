import {Routes} from '@angular/router';
import {UnitsComponent} from './units.component';
import {UnitDetailsComponent} from './unit-detail/unit-details.component';
import {UnitEditComponent} from './unit-edit/unit-edit.component';

export const unitRoute: Routes = [
  {
    path: 'unit',
    component: UnitsComponent,
    children: [
      { path: 'new', component: UnitEditComponent },
      { path: ':id', component: UnitDetailsComponent }
    ]
  }
];
