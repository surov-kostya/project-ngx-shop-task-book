import { Component, Output, EventEmitter, Input } from '@angular/core';
import { IProduct } from 'shared/mocks/1-components/product';

@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() public product: IProduct = {} as IProduct;
  @Output() goToProduct = new EventEmitter<void>();

  public redirectTo(): void {
    this.goToProduct.emit();
  }
}
