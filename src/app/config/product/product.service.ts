import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from '../../shared/product.model';
import { UnitOfMeasureModel } from '../../shared/unit-of-measure.model';

@Injectable()
export class ProductService {
  productsChanged = new Subject<ProductModel[]>();

  private products: ProductModel[] = [
    new ProductModel('Tomate concerve', '123456', 'Concerve', 'ttt', [
      new UnitOfMeasureModel('Kilogramme', 'kg'),
      new UnitOfMeasureModel('Gramme', 'g')
    ]),
    new ProductModel('Confiture', '123475', 'Concerve', 'ttt', [
      new UnitOfMeasureModel('Kilogramme', 'kg'),
      new UnitOfMeasureModel('Gramme', 'g')
    ])
  ];

  constructor() {}

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
    this.products.push(product);
    this.productsChanged.next(this.products.slice());
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
