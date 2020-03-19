import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductInStockModel } from '../../shared/product-in-stock.model';
import { MonStockService } from '../mon-stock.service';
import { MonStockStorageService } from '../mon-stock-storage.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html'
})
export class StockListComponent implements OnInit {
  myStock: ProductInStockModel[];

  constructor(private monStockService: MonStockService,
              private monStockStorageService: MonStockStorageService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.monStockStorageService.getProductsInMyStock().subscribe(
      (res: HttpResponse<ProductInStockModel[]>) => {
        this.myStock = res.body;
      }
    );
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
