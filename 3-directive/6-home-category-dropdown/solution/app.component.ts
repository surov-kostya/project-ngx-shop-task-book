import { categoriesMock } from './../../../../shared/mocks/categories.mock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'Компонент выбора категории товара, домашняя страница';
  public terminalMessage: any = '';
  public categories = categoriesMock;
  public selectedCategory(categoryName: string) {
    this.terminalMessage = categoryName;
  }
}
