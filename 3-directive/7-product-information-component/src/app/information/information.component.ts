import { IProduct } from './../../../../../shared/interfaces/product.interface';
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class InformationComponent {
  @Input()
  public product?: IProduct;
  @Output()
  public addingToBasket: EventEmitter<string> = new EventEmitter<string>();
  public isShow = false;
  public async addToBasket() {
    this.addingToBasket.emit('Вы вызвали метод добавления товара в корзину');
  }

  public show(): void {
    this.isShow = !this.isShow;
  }
}
