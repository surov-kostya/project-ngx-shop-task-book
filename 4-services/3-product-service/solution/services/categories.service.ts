import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from 'shared/interfaces/categories.interface';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) {}
  public configUrl = 'categories.json';
  public getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(this.configUrl);
  }
}
