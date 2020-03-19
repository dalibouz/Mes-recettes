import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot, Routes } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { EMPTY, Observable, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { MonStockComponent } from './mon-stock.component';
import { StockDetailComponent } from './stock-detail/stock-detail.component';
import { StockEditComponent } from './stock-edit/stock-edit.component';
import { ProductInStockModel } from '../shared/product-in-stock.model';
import { MonStockStorageService } from './mon-stock-storage.service';
import { QuantityModel } from '../shared/quantity.model';

@Injectable({providedIn: 'root'})
export class ProductInMyStockResolve implements Resolve<ProductInStockModel> {
  constructor(private monStockStorageService: MonStockStorageService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductInStockModel> | Promise<ProductInStockModel> | ProductInStockModel {
    const id = route.params['id'];
    if (id) {
      return this.monStockStorageService.getProductInMyStockById(id).pipe(
        flatMap((product: HttpResponse<ProductInStockModel>) => {
          if (product.body) {
            return of(product.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    let productInMyStock = new ProductInStockModel();
    productInMyStock.quantity = new QuantityModel();
    return productInMyStock;
  }
}

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
