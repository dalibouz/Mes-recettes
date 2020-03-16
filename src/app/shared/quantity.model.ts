import { UnitOfMeasureModel } from './unit-of-measure.model';

export class QuantityModel {
  constructor(public unit?: UnitOfMeasureModel, public amount?: number) {}
  toString(): string {
    return this.amount + ' ' + this.unit.symbol;
  }
}
