import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { monStockRoute } from './mon-stock.route';
import { MonStockService } from './mon-stock.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonStockComponent } from './mon-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockItemComponent } from './stock-list/stock-item/stock-item.component';

const ENTITY_STATES = [...monStockRoute];

@NgModule({
  imports: [RouterModule.forChild(ENTITY_STATES), BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [MonStockComponent, StockListComponent, StockItemComponent],
  providers: [MonStockService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonStockModule { }
