import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from '../../shared/product.model';
import { ProductStorageService } from './product-storage.service';

@Injectable()
export class ProductService {
  productsChanged = new Subject<ProductModel[]>();

  private products: ProductModel[] = [];

  constructor(private productStorage: ProductStorageService) {}

  setProducts(products: ProductModel[]) {
    this.products = products;
    this.productsChanged.next(this.products.slice());
  }

  getProducts() {
    return this.products.slice();
  }

  getProduct(index: number) {
    return this.products[index];
  }

  addProduct(product: ProductModel) {
    this.productStorage.create(product).subscribe(
      () => {
        this.products.push(product);
        this.productsChanged.next(this.products.slice());
      },
      () => {
        console.log('Erreur lors de l\'enregistrement ! \n');
      }
    );
  }

  updateProduct(index: number, product: ProductModel) {
    this.products[index] = product;
    this.productsChanged.next(this.products.slice());
  }

  deleteProduct(index: number) {
    this.products.splice(index, 1);
    this.productsChanged.next(this.products.slice());
  }
}
