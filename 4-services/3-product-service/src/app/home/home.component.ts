import { IProduct } from './../../../../../shared/interfaces/product.interface';
import { ICategory } from './../../../../../shared/interfaces/categories.interface';
import { CategoriesService } from './../services/categories.service';

import { Component, Output, EventEmitter } from '@angular/core';
import { IBanner } from './banner/banner.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'ngx-shop-products',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Output()
  public redirectTo: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  public suggestedProducts: IProduct[];
  public categories: ICategory[];
  public items: IBanner[] = [
    {
      subCategoryId: 'kompyutery-noutbuki-i-po',
      title: 'Компьютеры, ноутбуки и ПО',
      image: '/assets/images/carousel-laptop.png',
    },
    {
      subCategoryId: 'smartfony-i-gadzhety',
      title: 'Смартфоны и гаджеты',
      image: '/assets/images/carousel-phone.png',
    },
    {
      subCategoryId: 'igry-i-xobbi',
      title: ' Игры и хобби',
      image: '/assets/images/carousel-console.png',
    },
  ];
}
