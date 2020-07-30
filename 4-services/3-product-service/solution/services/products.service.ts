import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../../../../../shared/interfaces/product.interface';

@Injectable()
export class ProductsService {
  constructor(private http: HttpClient) {}
  public getSuggestedProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('products/suggestion');
  }
}
