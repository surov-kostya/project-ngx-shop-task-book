import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from '../../../../../../shared/interfaces/product.interface';
@Component({
  selector: 'ngx-shop-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input()
  public product!: IProduct;
  @Output()
  public goToProduct: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  public redirectTo(product: IProduct): void {
    this.goToProduct.emit(product);
  }
  ngDoCheck() {
    console.log(this.product);
  }
}
