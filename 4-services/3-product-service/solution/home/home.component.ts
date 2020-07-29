import { IProduct } from './../../../../../shared/interfaces/product.interface';
import { ICategory } from './../../../../../shared/interfaces/categories.interface';
import { CategoriesService } from './../services/categories.service';

import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { IBanner } from './banner/banner.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'ngx-shop-products',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  @Output()
  public redirectTo: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  public suggestedProducts: IProduct[];
  public categories: ICategory[];
  constructor(
    // tslint:disable-next-line:variable-name
    private readonly _categoryServise: CategoriesService,
    // tslint:disable-next-line:variable-name
    private readonly _productsService: ProductsService
  ) {}
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
  public goTo(product: IProduct) {
    this.redirectTo.emit(product);
  }
  public ngOnInit() {
    this._categoryServise
      .getCategories()
      .subscribe((categories) => (this.categories = categories));
    this._productsService
      .getSuggestedProducts()
      .subscribe((products) => (this.suggestedProducts = products));
  }
}
