import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductModel } from '../../../shared/product.model';
import { ProductService } from '../product.service';
import { QuantityModel } from '../../../shared/quantity.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product: ProductModel;
  id: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.product = this.productService.getProduct(this.id);
        }
      );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/product']);
  }

  getQuantityString(quantity: QuantityModel): string {
    if (quantity) {
      return quantity.amount + ' ' + quantity.unit.symbol;
    }
    return '';
  }

}
