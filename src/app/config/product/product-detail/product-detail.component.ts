import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from '../../../shared/product.model';
import { ProductService } from '../product.service';
import { ProductToStockDialogComponent } from '../add-to-stock-dialog/product-to-stock-dialog.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  product: ProductModel;
  id: number;

  constructor(private productService: ProductService,
              protected activatedRoute: ActivatedRoute,
              private route: ActivatedRoute,
              private router: Router,
              protected modalService: NgbModal) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe( ({ product }) => {
      this.product = product;
    });
  }

  onAddToStock() {
    const modalRef = this.modalService.open(ProductToStockDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.product = this.product;
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.productService.deleteProduct(this.id);
    this.router.navigate(['/product']);
  }

}
