import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UnitService } from '../unit.service';


@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {
  id: number;
  editMode = false;
  unitForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private unitService: UnitService,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.unitService.updateUnit(this.id, this.unitForm.value);
    } else {
      this.unitService.addUnit(this.unitForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let unitName = '';
    let unitSymbol = '';

    if (this.editMode) {
      const unit = this.unitService.getUnit(this.id);
      unitName = unit.name;
      unitSymbol = unit.symbol;
    }

    this.unitForm = new FormGroup({
      'name': new FormControl(unitName, Validators.required),
      'symbol': new FormControl(unitSymbol, Validators.required),
    });
  }

}
