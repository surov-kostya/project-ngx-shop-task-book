import { Component, Input } from '@angular/core';
import { IProduct } from 'shared/interfaces/product.interface';

@Component({
  selector: 'ngx-shop-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {
  @Input()
  public cartProducts;

  public disabled = false;

  public decrementProductInCart(product: IProduct): void {
    if (product.count > 0) {
      product.count--;
    }
    if (product.count === 0) {
      this.cartProducts = this.cartProducts.filter((item) => item !== product);
    }
  }

  public removeProductFromCart(product: IProduct): void {
    product.count = 0;
  }

  public incrementProductInCart(product: IProduct): void {
    product.count++;
  }
}
