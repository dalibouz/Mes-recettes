import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MonStockService } from '../mon-stock.service';
import { ProductInStockModel } from '../../shared/product-in-stock.model';
import { QuantityModel } from '../../shared/quantity.model';

@Component({
  selector: 'app-stock-detail',
  templateUrl: './stock-detail.component.html'
})
export class StockDetailComponent implements OnInit {
  productInStock: ProductInStockModel;
  id: number;

  constructor(private monStockService: MonStockService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.productInStock = this.monStockService.getProductInMyStock(this.id);
        }
      );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.monStockService.deleteProductInMyStock(this.id);
    this.router.navigate(['/mon-stock']);
  }

}
