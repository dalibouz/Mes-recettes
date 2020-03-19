import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonStockService } from '../mon-stock.service';
import { ProductInStockModel } from '../../shared/product-in-stock.model';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html'
})
export class StockDetailComponent implements OnInit {
  productInStock: ProductInStockModel;

  constructor(private monStockService: MonStockService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ product }) => {
      this.productInStock = product;
    });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

  onDeleteRecipe() {
    // TODO : remove me
    // this.monStockService.deleteProductInMyStock(this.productInStock.id);
    this.router.navigate(['/mon-stock']);
  }

}
