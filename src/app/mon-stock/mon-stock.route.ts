import { Routes } from '@angular/router';
import { MonStockComponent } from './mon-stock.component';

export const monStockRoute: Routes = [
  {
    path: 'mon-stock',
    component: MonStockComponent,
    // children: [
    //   { path: 'new', component: UnitEditComponent },
    //   { path: ':id', component: UnitDetailsComponent }
    // ]
  }
];
