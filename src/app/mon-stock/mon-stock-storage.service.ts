import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_API_URL } from '../app.constants';
import { ProductInStockModel } from '../shared/product-in-stock.model';

type EntityResponseType = HttpResponse<ProductInStockModel>;
type EntityArrayResponseType = HttpResponse<ProductInStockModel[]>;

@Injectable({ providedIn: 'root' })
export class MonStockStorageService {
  public resourceUrl = SERVER_API_URL + 'api/product-in-stocks';

  constructor(private http: HttpClient) {}

  getProductInMyStockById(id: string): Observable<EntityResponseType> {
    return this.http.get<ProductInStockModel>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  addProductToStock(product: ProductInStockModel): Observable<EntityResponseType> {
    return this.http.post<ProductInStockModel>(this.resourceUrl, product, { observe: 'response' });
  }

  getProductsInMyStock(): Observable<EntityArrayResponseType> {
    return this.http.get<ProductInStockModel[]>(this.resourceUrl, {observe: 'response'});
  }
}
