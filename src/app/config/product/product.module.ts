import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { productRoute } from './product.route';
import { ProductService } from './product.service';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgxBarcodeModule } from 'ngx-barcode';
import { ProductEditComponent } from './product-edit/product-edit.component';

const ENTITY_STATES = [...productRoute];

@NgModule({
  imports: [RouterModule.forChild(ENTITY_STATES), BrowserModule, FormsModule, ReactiveFormsModule, NgxBarcodeModule],
  declarations: [ProductComponent, ProductListComponent, ProductItemComponent, ProductDetailComponent, ProductEditComponent],
  providers: [ProductService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductModule { }
