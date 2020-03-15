import { Component, OnInit, Input } from '@angular/core';
import { UnitOfMeasureModel } from '../../../../shared/unit-of-measure.model';

@Component({
  selector: 'app-unit-item',
  templateUrl: './unit-item.component.html'
})
export class UnitItemComponent implements OnInit {
  @Input() unit: UnitOfMeasureModel;
  @Input() index: number;

  ngOnInit() {
  }
}
