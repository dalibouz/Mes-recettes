import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.service';
import { HttpResponse } from '@angular/common/http';
import { UnitOfMeasureModel } from '../shared/unit-of-measure.model';
import { UnitService } from '../config/units/unit.service';
import { UnitsStorageService } from '../config/units/units-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService, private unitsService: UnitService, private unitsStorageService: UnitsStorageService) {}

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: Response) => {
          console.log(response);
        }
      );
  }

  onFetchData() {
    // this.dataStorageService.getRecipes();
    this.unitsStorageService.getUnits().subscribe(
      (res: HttpResponse<UnitOfMeasureModel[]>) => {
        this.unitsService.setUnits(res.body)
      }
    );
  }
}
