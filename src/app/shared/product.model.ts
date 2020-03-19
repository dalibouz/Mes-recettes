import { QuantityModel } from './quantity.model';

export class ProductModel {
  constructor(
    public id?: string,
    public name?: string,
    public marque?: string,
    public barcode?: string,
    public type?: string,
    public composition?: string,
    public imgPath?: string,
    public quantity?: QuantityModel
  ) {
  }
}
