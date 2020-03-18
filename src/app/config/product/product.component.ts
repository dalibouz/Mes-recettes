import { Component, OnInit } from '@angular/core';
import { ProductStorageService } from './product-storage.service';
import { HttpResponse } from '@angular/common/http';
import { ProductModel } from '../../shared/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  constructor(private productStorageService: ProductStorageService, private productService: ProductService) { }

  ngOnInit() {
    this.productStorageService.getProducts().subscribe(
      (res: HttpResponse<ProductModel[]>) => {
        this.productService.setProducts(res.body);
      }
    );
  }
}
