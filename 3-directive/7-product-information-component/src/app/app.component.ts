import { productData } from './../../../../shared/mocks/mock-product';
import { Component } from '@angular/core';
import { oneProduct } from '../../../../shared/mocks/oneProductMock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent {
  public title = 'Компонент информации о продукте';
  public terminalMessage: string;
  public product = oneProduct;
  public addToBasket(info: string) {
    this.terminalMessage = info;
  }
}
