import { Component } from '@angular/core';
import { oneProduct } from '../../../../shared/mocks/productMock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent {
  public title = 'Компонент визуализации рейтинга товара';
  public terminalMessage = oneProduct.rating;
  public product = oneProduct;
}
