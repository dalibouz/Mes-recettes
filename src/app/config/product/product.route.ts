import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const productRoute: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      { path: ':id', component: ProductDetailComponent }
    ]
  }
];
