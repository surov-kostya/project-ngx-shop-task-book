import { IProduct } from './../../../../../../shared/interfaces/product.interface';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
@Component({
  selector: 'ngx-shop-content-product',
  templateUrl: './product-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductComponent {
  @Input()
  public product!: IProduct;

  @Output()
  public toCart: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public goToProduct: EventEmitter<string> = new EventEmitter<string>();

  public addToBasket(): void {
    this.toCart.emit('Вы добавили товар в корзину');
  }
  public redirectTo(): void {
    this.goToProduct.emit('Переход на компонент товара');
  }
}
