import { IProduct } from '../../../../shared/interfaces/product.interface';
import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-products',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  @Input()
  public suggestedProducts: IProduct[];
  @Output()
  public redirectTo: EventEmitter<IProduct> = new EventEmitter<IProduct>();
  public goTo(product: IProduct) {
    this.redirectTo.emit(product);
  }
}
