import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { monStockRoute } from './mon-stock.route';
import { MonStockService } from './mon-stock.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MonStockComponent } from './mon-stock.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { StockItemComponent } from './stock-list/stock-item/stock-item.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { SharedModule } from '../shared/shared.module';
import { StockEditComponent } from './stock-edit/stock-edit.component';

const ENTITY_STATES = [...monStockRoute];

@NgModule({
  imports: [RouterModule.forChild(ENTITY_STATES), BrowserModule, FormsModule, ReactiveFormsModule, SharedModule],
  declarations: [MonStockComponent, StockListComponent, StockItemComponent, StockDetailComponent, StockEditComponent],
  providers: [MonStockService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MonStockModule { }
