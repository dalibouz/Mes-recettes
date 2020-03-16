import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductModel } from '../../shared/product.model';
import { UnitOfMeasureModel } from '../../shared/unit-of-measure.model';
import { QuantityModel } from '../../shared/quantity.model';

@Injectable()
export class ProductService {
  productsChanged = new Subject<ProductModel[]>();

  private products: ProductModel[] = [
    new ProductModel(
      'Tomate concerve',
      'Annalisa',
      '8002560200106',
      'Concerve',
      'Tomate composition',
      'https://www.produits-italiens.fr/4125-large_default/pulpe-de-tomates-100-italiennes.jpg',
      new QuantityModel(
        new UnitOfMeasureModel('Kilogramme', 'kg'),
        1
      )
    ),
    new ProductModel(
      'Confiture',
      'Bonne Maman',
      '3608580758686',
      'Concerve',
      'confiture composition',
      'https://www.bonnemaman.ch/uploads/catalogues_price_image/confiturePackaging-fraise.jpg',
      new QuantityModel(
        new UnitOfMeasureModel('Kilogramme', 'kg'),
        2
      )
    )
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
