import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot, Routes} from '@angular/router';
import {EMPTY, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {flatMap} from 'rxjs/operators';
import {HttpResponse} from '@angular/common/http';

import {ProductComponent} from './product.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductModel} from '../../shared/product.model';
import {ProductStorageService} from './product-storage.service';
import {QuantityModel} from '../../shared/quantity.model';

@Injectable({providedIn: 'root'})
export class ProductResolve implements Resolve<ProductModel> {
  constructor(private productStorageService: ProductStorageService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductModel> | Promise<ProductModel> | ProductModel {
    const id = route.params['id'];
    if (id) {
      return this.productStorageService.getProductById(id).pipe(
        flatMap((product: HttpResponse<ProductModel>) => {
          if (product.body) {
            return of(product.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    const product = new ProductModel();
    product.quantity = new QuantityModel();

    return of(product);
  }

}

export const productRoute: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    children: [
      {path: 'new', component: ProductEditComponent, resolve: {product: ProductResolve}},
      {path: ':id', component: ProductDetailComponent, resolve: {product: ProductResolve}},
      {path: ':id/edit', component: ProductEditComponent, resolve: {product: ProductResolve}},
      {path: ':id/add-to-stock', component: ProductEditComponent}
    ]
  }
];
