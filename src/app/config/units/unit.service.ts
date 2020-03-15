import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UnitOfMeasureModel } from '../../shared/unit-of-measure.model';

@Injectable()
export class UnitService {
  unitsChanged = new Subject<UnitOfMeasureModel[]>();

  private units: UnitOfMeasureModel[] = [
    new UnitOfMeasureModel('Litre', 'l'),
    new UnitOfMeasureModel('Gramme', 'gr'),
    new UnitOfMeasureModel('Kilogramme', 'kg')
  ];

  constructor() {}

  setUnits(units: UnitOfMeasureModel[]) {
    this.units = units;
    this.unitsChanged.next(this.units.slice());
  }

  getUnits() {
    return this.units.slice();
  }

  getUnit(index: number) {
    return this.units[index];
  }

  addUnit(unit: UnitOfMeasureModel) {
    this.units.push(unit);
    this.unitsChanged.next(this.units.slice());
  }

  updateUnit(index: number, unit: UnitOfMeasureModel) {
    this.units[index] = unit;
    this.unitsChanged.next(this.units.slice());
  }

  deleteUnit(index: number) {
    this.units.splice(index, 1);
    this.unitsChanged.next(this.units.slice());
  }
}
