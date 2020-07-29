import {
  ICategory,
  ISubCategory,
} from './../../../../../shared/interfaces/categories.interface';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-shop-category-dropdown',
  templateUrl: './category-dropdown.component.html',
})
export class CategoryDropdownComponent {
  @Input()
  public categories!: ICategory[];
  public currentIndex: number | null = null;
  public currentCategory?: ISubCategory;
  @Output()
  public selectedSubCategory: EventEmitter<ISubCategory> = new EventEmitter<
    ISubCategory
  >();
  public hover(index: number): void {
    this.currentIndex = index;
  }
  public categorySelect(subCategory: ISubCategory): void {
    this.currentCategory = subCategory;
    this.selectedSubCategory.emit(subCategory);
  }
}
