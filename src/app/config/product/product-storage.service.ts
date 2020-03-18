import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../../shared/product.model';
import { SERVER_API_URL } from '../../app.constants';

type EntityResponseType = HttpResponse<ProductModel>;
type EntityArrayResponseType = HttpResponse<ProductModel[]>;

@Injectable()
export class ProductStorageService {
  public resourceUrl = SERVER_API_URL + 'api/products';

  constructor(private http: HttpClient) {}

  // storeRecipes() {
  //   return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.productService.getRecipes());
  // }

  create(product: ProductModel): Observable<EntityResponseType> {
    return this.http.post<ProductModel>(this.resourceUrl, product, { observe: 'response' });
  }

  getProducts(): Observable<EntityArrayResponseType> {
    return this.http.get<ProductModel[]>(this.resourceUrl, {observe: 'response'});
  }
}
