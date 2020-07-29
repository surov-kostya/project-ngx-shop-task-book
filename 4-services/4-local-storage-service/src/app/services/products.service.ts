import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProductApi } from '../../../../../shared/interfaces/product.interface';

import { IProduct } from '../../../../../shared/interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}
  public configUrl = 'suggested.json';
  public getSuggestedProducts(): Observable<IProductApi> {
    return this.http.get<IProductApi>(this.configUrl);
  }
  public getProductById(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`/products/${id}`);
  }
}
