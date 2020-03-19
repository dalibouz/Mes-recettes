import {Component} from '@angular/core';
import {ProductModel} from '../../../shared/product.model';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UnitOfMeasureModel} from '../../../shared/unit-of-measure.model';
import {HttpResponse} from '@angular/common/http';
import {UnitsStorageService} from '../../units/units-storage.service';
import {MonStockStorageService} from '../../../mon-stock/mon-stock-storage.service';

@Component({
  templateUrl: './product-to-stock-dialog.component.html'
})
export class ProductToStockDialogComponent {
  product?: ProductModel;
  productInStockForm: FormGroup;
  units: UnitOfMeasureModel[];
  errorMessage: string;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private unitsStorageService: UnitsStorageService,
    private service: MonStockStorageService
  ) {
    this.unitsStorageService.getUnits().subscribe(
      (res: HttpResponse<UnitOfMeasureModel[]>) => {
        this.units = res.body.filter(value => {
          return 'Pièce' === value.name;
        });
      }
    );
    this.createForm();
  }

  private createForm() {
    this.productInStockForm = this.formBuilder.group({
      quantity: new FormGroup({
        amount: new FormControl('1', Validators.required),
        unit: new FormControl(undefined, Validators.required)
      }),
      product: [],
      buyDate: new Date(),
      limitDate: []
    });
  }

  clear(): void {
    this.activeModal.dismiss();
  }

  confirmAddProducttoStock(): void {
    this.productInStockForm.patchValue({product: this.product});
    this.service.addProductToStock(this.productInStockForm.value).subscribe(
      () => {
        this.activeModal.close();
      },
      (error) => {
        this.errorMessage = error.message;
        console.log('Erreur lors de l\'enregistrement ! \n' + error.message);
      }
    );
  }
}
