import { ProductModel } from './product.model';
import { Moment } from 'moment';
import {QuantityModel} from './quantity.model';

export class ProductInStockModel {
  constructor(
    public id?: string,
    public buyDate?: Moment,
    public limitDate?: Moment,
    public product?: ProductModel,
    public quantity?: QuantityModel
  ) {}
}
