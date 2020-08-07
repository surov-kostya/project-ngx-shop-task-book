import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from 'shared/interfaces/product.interface';
@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input()
  public product!: IProduct;
  @Output()
  public goToProduct: EventEmitter<void> = new EventEmitter<void>();

  public redirectTo(): void {
    this.goToProduct.emit();
  }
}
