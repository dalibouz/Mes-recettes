import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductService} from '../product.service';
import {ProductModel} from '../../../shared/product.model';
import {ProductStorageService} from '../product-storage.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {

  inputSearch = '';
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

  onFindProduct() {
    this.productStorageService.getProductsLike(this.inputSearch).subscribe(
      (res: HttpResponse<ProductModel[]>) => {
        this.products = res.body;
      }
    );
  }

  clearFind() {
    this.inputSearch = '';
    this.initProducts();
  }

  private initProducts() {
    this.productStorageService.getProducts().subscribe(
      (res: HttpResponse<ProductModel[]>) => {
        this.products = res.body;
      }
    );
  }
}
