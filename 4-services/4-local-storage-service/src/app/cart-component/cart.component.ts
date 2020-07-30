import { LocalStorageService } from '../services/local-storage.service';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../../../../shared/interfaces/product.interface';

@Component({
  selector: 'ngx-shop-cart',
  templateUrl: './cart.component.html',
})
// @ts-ignore
export class CartComponent implements OnInit {
  constructor(private readonly _localStorageService: LocalStorageService) {}
  @Input()
  public cartProducts?: IProduct[];

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
  public ngOnInit(): void {
    this.cartProducts = this._localStorageService.getFromLocalStorage('cart');
  }
}
