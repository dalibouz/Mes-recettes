import { QuantityModel } from './quantity.model';
import { ProductModel } from './product.model';

export class ProductInStockModel {
  constructor(public product: ProductModel, public buyDate: Date, public limitDate: Date, public qt: QuantityModel) {}
}
