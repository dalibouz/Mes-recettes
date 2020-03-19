import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductModel } from '../../shared/product.model';
import { MonStockService } from '../mon-stock.service';
import { UnitOfMeasureModel } from '../../shared/unit-of-measure.model';
import { ProductType } from '../../shared/enums/product-type.model';
import { UnitService } from '../../config/units/unit.service';
import { ProductService } from '../../config/product/product.service';
import { ProductInStockModel } from '../../shared/product-in-stock.model';


@Component({
  selector: 'app-stock-edit',
  templateUrl: './stock-edit.component.html'
})
export class StockEditComponent implements OnInit {
  id: number;
  editMode = false;
  productInStockForm: FormGroup;
  units: UnitOfMeasureModel[];
  productTypeEnums = ProductType;
  products: ProductModel[] = [];
  selectedProduct: ProductModel;

  constructor(private activatedRoute: ActivatedRoute,
              private unitService: UnitService,
              private productService: ProductService,
              private productInStockService: MonStockService,
              private router: Router) {
    this.units = this.unitService.getUnits();
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe( ({ product }) => {
      this.id = product.id;
      this.editMode = product.id != null;
      this.initForm(product);
    });
  }

  onSubmit() {
    if (this.editMode) {
      this.productInStockService.updateProductInMyStock(this.id, this.productInStockForm.value);
    } else {
      this.productInStockService.addProductToMyStock(this.productInStockForm.value);
    }
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  private initForm(product: ProductInStockModel) {
    if (this.editMode) {
      this.selectedProduct = product.product;
    }
    this.productInStockForm = new FormGroup({
      'buyDate': new FormControl(product.buyDate, Validators.required),
      'limitDate': new FormControl(product.limitDate, Validators.required),
      'product': new FormControl( product.product, Validators.required),
      'quantity': new FormGroup({
        'amount': new FormControl(product.quantity.amount, Validators.required),
        'unit': new FormControl(product.quantity.unit, Validators.required)
      })
    });
  }

  selectProduct(selectedProduct) {
    this.selectedProduct = selectedProduct;
  }

}
