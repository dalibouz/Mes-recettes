import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductModel} from '../../../shared/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(private productService: ProductService,
              private productStorageService: ProductStorageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.initProducts();
  }

  onNewUnit() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initProducts() {
    this.productStorageService.getProducts().subscribe(
      (res: HttpResponse<ProductModel[]>) => {
        this.products = res.body;
      }
    );
  }
}
