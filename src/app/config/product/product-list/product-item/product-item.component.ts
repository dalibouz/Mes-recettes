import { Component, OnInit, Input } from '@angular/core';
import {ProductModel} from '../../../../shared/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html'
})
export class ProductItemComponent implements OnInit {
  @Input() product: ProductModel;
  @Input() index: number;

  ngOnInit() {
  }
}
