import { Component, OnInit, Input } from '@angular/core';
import { ProductInStockModel } from '../../../shared/product-in-stock.model';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {
  @Input() productInStock: ProductInStockModel;
  @Input() index: number;

  ngOnInit() {
  }
}
