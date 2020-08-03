import { IProduct } from './../../../../../shared/interfaces/product.interface';
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
  public product: IProduct;
  ngOnInit() {
    console.log(this.product);
  }
}
