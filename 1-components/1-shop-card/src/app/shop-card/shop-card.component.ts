import { IProduct } from './../../../../../shared/interfaces/product.interface';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-shop-card',
  templateUrl: './shop-card.component.html',
})
// @ts-ignore
export class ShopCardComponent {
  // @Output()
  // public increment: EventEmitter<void> = new EventEmitter<void>();
  // @Output()
  // public decrement: EventEmitter<void> = new EventEmitter<void>();
  // @Input()
  // public product: IProduct;
  // public decrementProductInCart() {
  //   this.product.count--;
  //   this.decrement.emit();
  // }
  // public incrementProductInCart() {
  //   this.product.count++;
  //   this.increment.emit();
  // }
}
