import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { QuantityModel } from '../../../shared/quantity.model';
import { UnitOfMeasureModel } from '../../../shared/unit-of-measure.model';
import { UnitService } from '../../units/unit.service';
import { ProductType } from '../../../shared/enums/product-type.model';


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

  constructor(private route: ActivatedRoute,
              private unitService: UnitService,
              private productService: ProductService,
              private router: Router) {
    this.units = this.unitService.getUnits();
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
      this.productService.updateProduct(this.id, this.productForm.value);
    } else {
      this.productService.addProduct(this.productForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let productName = '';
    let productMarque = '';
    let productBarcode = '';
    let productType = '';
    let productComposition = '';
    let productImagePath = '';
    let productQuantity = new QuantityModel();

    if (this.editMode) {
      const product = this.productService.getProduct(this.id);
      productName = product.name;
      productMarque = product.marque;
      productBarcode = product.barcode;
      productType = product.type;
      productComposition = product.composition;
      productImagePath = product.imgPath;
      if (product.quantity) {
        productQuantity = product.quantity;
      }
    }

    this.productForm = new FormGroup({
      'name': new FormControl(productName, Validators.required),
      'marque': new FormControl(productMarque, Validators.required),
      'barcode': new FormControl(productBarcode, Validators.required),
      'type': new FormControl(productType, Validators.required),
      'composition': new FormControl(productComposition, Validators.required),
      'imgPath': new FormControl(productImagePath, Validators.required),
      'quantity': new FormGroup({
        'amount': new FormControl(productQuantity.amount, Validators.required),
        'unit': new FormControl(productQuantity.unit, Validators.required)
      })
    });
  }

}
