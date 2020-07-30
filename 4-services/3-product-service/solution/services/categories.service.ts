import { Injectable } from '@angular/core';
import { ICategory } from 'shared/interfaces/categories.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}
  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('categories');
  }
}
