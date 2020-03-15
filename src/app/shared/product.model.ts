import { UnitOfMeasureModel } from './unit-of-measure.model';

export class ProductModel {
  constructor(
    public name: string,
    public barcode: string,
    public type: string,
    public imgPath: string,
    public authorizedUnit: UnitOfMeasureModel[]
  ) {
  }
}
