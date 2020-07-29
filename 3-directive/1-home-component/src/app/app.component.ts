import { Component } from '@angular/core';
import { suggestedProducts } from '../../../../shared/mocks/suggested.mock';
import { IProduct } from 'shared/interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public suggestedProducts = suggestedProducts;
  public title = 'Список рекомендуемых товаров';
  public terminalMessage: any = '';
  public redirectTo(product: IProduct) {
    this.terminalMessage = product;
  }
}
