import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../../../shared/mocks/3-directives/product-information';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
})
export class InformationComponent {
  @Input()
  public product?: IProduct;
  public isShow = false;

  @Output()
  public addToCart: EventEmitter<string> = new EventEmitter<string>();

  public addToBasket(): void {
    this.addToCart.emit('товар добавлен в карзину');
  }
  public show(): void {
    this.isShow = !this.isShow;
  }
}
