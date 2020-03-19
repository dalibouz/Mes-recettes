import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { UnitOfMeasureModel } from '../../../shared/unit-of-measure.model';
import { UnitService } from '../../units/unit.service';
import { ProductType } from '../../../shared/enums/product-type.model';
import { ProductModel } from '../../../shared/product.model';


@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit {
  id: number;
  editMode = false;
  productForm: FormGroup;
  units: UnitOfMeasureModel[];
  productTypeEnums = ProductType;

  constructor(private unitService: UnitService,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private router: Router) {
    this.units = this.unitService.getUnits();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ product }) => {
      this.id = product.id;
      this.editMode = this.id != null;
      this.initForm(product);
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.productService.updateProduct(this.id, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  private initForm(product: ProductModel) {
    this.productForm = new FormGroup({
      'name': new FormControl(product.name, Validators.required),
      'marque': new FormControl(product.marque, Validators.required),
      'barcode': new FormControl(product.barcode, Validators.required),
      'type': new FormControl(product.type, Validators.required),
      'composition': new FormControl(product.composition, Validators.required),
      'imgPath': new FormControl(product.imgPath, Validators.required),
      'quantity': new FormGroup({
        'amount': new FormControl(product.quantity.amount, Validators.required),
        'unit': new FormControl(product.quantity.unit, Validators.required)
      })
    });
  }

}
