import { IProduct } from '../../../../../shared/interfaces/product.interface';
import { productData } from '../../../../../shared/mocks/mock-product';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})
// @ts-ignore
export class ShopCardComponent {
  @Input()
  public product: any = productData;

  public removeProductFromCart() {
    this.product.count++;
  }
  public incrementProductInCart() {}
  public decrementProductInCart() {}
}
