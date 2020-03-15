import { Component, OnInit } from '@angular/core';
import { UnitOfMeasureModel } from '../../../shared/unit-of-measure.model';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html'
})
export class UnitDetailsComponent implements OnInit {
  unit: UnitOfMeasureModel;
  id: number;

  constructor(private unitService: UnitService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.unit = this.unitService.getUnit(this.id);
        }
      );
  }

  onEditUnit() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteUnit() {
    this.unitService.deleteUnit(this.id);
    this.router.navigate(['/unit']);
  }
}
