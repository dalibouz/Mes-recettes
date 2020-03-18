import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { ProductInStockModel } from '../../shared/product-in-stock.model';
import { MonStockService } from '../mon-stock.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html'
})
export class StockListComponent implements OnInit, OnDestroy {
  myStock: ProductInStockModel[];
  subscription: Subscription;

  constructor(private monStockService: MonStockService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.monStockService.monStockChanged
      .subscribe(
        (monStock: ProductInStockModel[]) => {
          this.myStock = monStock;
        }
      );
    this.myStock = this.monStockService.getMonStock();
  }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
