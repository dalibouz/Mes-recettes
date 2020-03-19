import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ProductInStockModel } from '../shared/product-in-stock.model';
import {ProductModel} from '../shared/product.model';
import {QuantityModel} from '../shared/quantity.model';
import {UnitOfMeasureModel} from '../shared/unit-of-measure.model';
import * as moment from 'moment';

@Injectable()
export class MonStockService {
  monStockChanged = new Subject<ProductInStockModel[]>();

  private monStock: ProductInStockModel[] = [
    new ProductInStockModel(
      '25',
      moment(),
      moment(),
      new ProductModel(
        '25',
        'Confiture',
        'Bonne Maman',
        '3608580758686',
        'Concerve',
        'confiture composition',
        'https://www.bonnemaman.ch/uploads/catalogues_price_image/confiturePackaging-fraise.jpg',
        new QuantityModel(
          new UnitOfMeasureModel('id1', 'Kilogramme', 'kg'),
          2
        )
      ),
      new QuantityModel(
        new UnitOfMeasureModel('id2', 'Unité', 'units'),
        2
      )
    )
  ];

  constructor() {}

  setMonStock(productsInStock: ProductInStockModel[]) {
    this.monStock = productsInStock;
    this.monStockChanged.next(this.monStock.slice());
  }

  getMonStock() {
    return this.monStock.slice();
  }

  getProductInMyStock(index: number) {
    return this.monStock[index];
  }

  addProductToMyStock(product: ProductInStockModel) {
    this.monStock.push(product);
    this.monStockChanged.next(this.monStock.slice());
  }

  updateProductInMyStock(index: number, product: ProductInStockModel) {
    this.monStock[index] = product;
    this.monStockChanged.next(this.monStock.slice());
  }

  deleteProductInMyStock(index: number) {
    this.monStock.splice(index, 1);
    this.monStockChanged.next(this.monStock.slice());
  }
}
