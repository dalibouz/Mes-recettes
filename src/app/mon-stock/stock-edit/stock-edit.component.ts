import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductModel } from '../../shared/product.model';
import { MonStockService } from '../mon-stock.service';
import { UnitOfMeasureModel } from '../../shared/unit-of-measure.model';
import { ProductType } from '../../shared/enums/product-type.model';
import { UnitService } from '../../config/units/unit.service';
import { QuantityModel } from '../../shared/quantity.model';
import { ProductService } from '../../config/product/product.service';


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

  constructor(private route: ActivatedRoute,
              private unitService: UnitService,
              private productService: ProductService,
              private productInStockService: MonStockService,
              private router: Router) {
    this.units = this.unitService.getUnits();
    this.products = this.productService.getProducts();
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          console.log(this.productService.getProducts());
          this.initForm();
        }
      );
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
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let productBuyDate = undefined;
    let productLimitDate = undefined;
    let productInStock = undefined;
    let productInStockQuantity = new QuantityModel();

    if (this.editMode) {
      const product = this.productInStockService.getProductInMyStock(this.id);
      productBuyDate = product.buyDate;
      productLimitDate = product.limitDate;
      productInStock = product.product;
      this.selectedProduct = product.product;

      if (product.quantity) {
        productInStockQuantity = product.quantity;
      }
    }

    this.productInStockForm = new FormGroup({
      'buyDate': new FormControl(productBuyDate, Validators.required),
      'limitDate': new FormControl(productLimitDate, Validators.required),
      'product': new FormControl(productInStock, Validators.required),
      'quantity': new FormGroup({
        'amount': new FormControl(productInStockQuantity.amount, Validators.required),
        'unit': new FormControl(productInStockQuantity.unit, Validators.required)
      })
    });
  }

  selectProduct(selectedProduct) {
    this.selectedProduct = selectedProduct;
  }

}
