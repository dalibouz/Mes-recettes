import { Component, OnDestroy, OnInit } from '@angular/core';
import { UnitOfMeasureModel } from '../../../shared/unit-of-measure.model';
import { Subscription } from 'rxjs';
import { UnitService } from '../unit.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unit-list',
  templateUrl: './unit-list.component.html'
})
export class UnitListComponent implements OnInit, OnDestroy {

  units: UnitOfMeasureModel[];
  subscription: Subscription;

  constructor(private unitService: UnitService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.unitService.unitsChanged
      .subscribe(
        (units: UnitOfMeasureModel[]) => {
          this.units = units;
        }
      );
    this.units = this.unitService.getUnits();
  }

  onNewUnit() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
