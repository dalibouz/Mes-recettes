import { Component, OnInit } from '@angular/core';
import {ProductStorageService} from './product-storage.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  constructor(private productStorageService: ProductStorageService) { }

  ngOnInit() {
    this.productStorageService.getProducts();
  }
}
