import { Routes } from '@angular/router';
import { MonStockComponent } from './mon-stock.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';

export const monStockRoute: Routes = [
  {
    path: 'mon-stock',
    component: MonStockComponent,
    children: [
      { path: 'new', component: StockEditComponent },
      { path: ':id', component: StockDetailComponent },
      { path: ':id/edit', component: StockEditComponent },
    ]
  }
];
