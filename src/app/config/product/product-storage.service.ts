import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ProductService } from './product.service';
import { ProductModel } from '../../shared/product.model';

@Injectable()
export class ProductStorageService {
  constructor(private http: Http, private productService: ProductService) {}

  // storeRecipes() {
  //   return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.productService.getRecipes());
  // }

  getProducts() {
    this.http.get('http://localhost:8080/api/products')
      .map(
        (response: Response) => {
          const products: ProductModel[] = response.json();
          return products;
        }
      )
      .subscribe(
        (products: ProductModel[]) => {
          this.productService.setProducts(products);
        }
      );
  }
}
