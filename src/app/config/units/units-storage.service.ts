import { Injectable } from '@angular/core';
import { UnitOfMeasureModel } from '../../shared/unit-of-measure.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { SERVER_API_URL } from '../../app.constants';

type EntityResponseType = HttpResponse<UnitOfMeasureModel>;
type EntityArrayResponseType = HttpResponse<UnitOfMeasureModel[]>;

@Injectable({ providedIn: 'root' })
export class UnitsStorageService {
  public resourceUrl = SERVER_API_URL + 'api/unit-of-measures';

  constructor(private http: HttpClient) {}

  // storeRecipes() {
  //   return this.http.put('https://ng-recipe-book.firebaseio.com/recipes.json', this.productService.getRecipes());
  // }

  // create(product: ProductModel): Observable<EntityResponseType> {
  //   return this.http.post<ProductModel>(this.resourceUrl, product, { observe: 'response' });
  // }

  getUnits(): Observable<EntityArrayResponseType> {
    return this.http.get<UnitOfMeasureModel[]>(this.resourceUrl, {observe: 'response'});
  }
}
