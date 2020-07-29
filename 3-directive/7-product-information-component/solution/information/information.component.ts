import { IProduct } from './../../../../../shared/interfaces/product.interface';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-shop-information',
  templateUrl: './information.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class InformationComponent {
  @Input()
  public product?: IProduct;
  public isShow = false;
  public async addToBasket(product: IProduct): Promise<void> {}

  public show(): void {
    this.isShow = !this.isShow;
  }
}
