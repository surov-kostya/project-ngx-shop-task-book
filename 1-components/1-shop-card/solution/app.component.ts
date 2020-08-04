import { cartProducts } from './../../../../shared/mocks/cart.mock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent {
  public product = cartProducts[0];
  public terminalMessage = '';
  public decrement() {
    this.terminalMessage = 'Уменьшение количества товара';
  }
  public increment() {
    this.terminalMessage = 'Увеличение количества товара';
  }
}
