import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ICartProduct } from 'shared/mocks/1-components/cart-product';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})
export class ShopCardComponent {
  @Input() public product: ICartProduct = {} as ICartProduct;
  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();

  public decrementProductInCart(): void {
    this.decrement.emit();
  }
  public incrementProductInCart(): void {
    this.increment.emit();
  }
}
