import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
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

  getProductsInMyStock(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http.get<ProductInStockModel[]>(this.resourceUrl, {params: options, observe: 'response'});
  }
}

export const createRequestOption = (req?: any): HttpParams => {
  let options: HttpParams = new HttpParams();
  if (req) {
    Object.keys(req).forEach(key => {
      if (key !== 'sort') {
        options = options.set(key, req[key]);
      }
    });
    if (req.sort) {
      req.sort.forEach((val: string) => {
        options = options.append('sort', val);
      });
    }
  }
  return options;
};
