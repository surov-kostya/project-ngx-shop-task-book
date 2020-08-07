import { IProduct } from '../../../../../shared/interfaces/product.interface';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})
// @ts-ignore
export class ShopCardComponent {
  @Output()
  public decrement: EventEmitter<void> = new EventEmitter<void>();
  @Output()
  public increment: EventEmitter<void> = new EventEmitter<void>();
  @Input()
  public product = {} IProduct;

  public decrementProductInCart(product: IProduct): void {
    if (product && product.count > 1) {
      product.count--;
      this.decrement.emit();
    }
  }
  public incrementProductInCart(product: IProduct): void {
    product.count++;
    this.increment.emit();
  }
}
