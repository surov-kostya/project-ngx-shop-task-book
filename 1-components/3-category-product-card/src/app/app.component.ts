import { Component } from '@angular/core';
import { productData } from '../../../../shared/mocks/mock-product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public productData = productData;
  public terminalMessage = '';
  public title = 'Компонент товара в категории';
  public toCart() {
    this.terminalMessage = 'Вы добавили товар в корзину';
  }
  public goToProduct() {
    this.terminalMessage = 'Переход на компонент товара';
  }
}
