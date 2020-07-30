import {
  Component,
  EventEmitter,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { IProduct } from 'shared/interfaces/product.interface';

@Component({
  selector: 'ngx-shop-cart-product',
  templateUrl: './cart-product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartProductComponent {
  @Input()
  public product!: IProduct;
  @Input()
  public disabled?: boolean;
  @Output()
  public decrement: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  @Output()
  public increment: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  @Output()
  public remove: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  public decrementProductInCart(product: IProduct): void {
    this.decrement.emit(product);
  }

  public removeProductFromCart(product: IProduct): void {
    this.remove.emit(product);
  }

  public incrementProductInCart(product: IProduct): void {
    this.increment.emit(product);
  }
  public redirectTo(): void {}
}
