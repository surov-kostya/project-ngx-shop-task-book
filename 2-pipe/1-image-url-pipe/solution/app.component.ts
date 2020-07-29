import { Component } from '@angular/core';
import { expProducts } from '../../../../shared/mocks/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent {
  public product = expProducts[0];
  public title = '1. Пайпы';
  public terminalMessage: string;
  public increment() {
    this.terminalMessage = 'Увеличение количества товара';
  }
  public remove() {
    this.terminalMessage = 'Убрать товара из корзины';
  }
  public decrement() {
    this.terminalMessage = 'Уменьшение количества товара';
  }
}
