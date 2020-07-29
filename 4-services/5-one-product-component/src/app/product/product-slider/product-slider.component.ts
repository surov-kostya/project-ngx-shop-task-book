import {
  slideAnimation,
  initSliderAnimation,
  Slider,
} from './../../../../../../shared/utils/slider';

import {
  Component,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';

import { IProductImage } from '../../../../../../shared/interfaces/product.interface';
@Component({
  selector: 'ngx-shop-product-slider',
  templateUrl: './product-slider.component.html',
  animations: [slideAnimation, initSliderAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class ProductSliderComponent extends Slider<IProductImage> {
  @Input()
  public items: IProductImage[] = [];
  constructor(private readonly _cdr: ChangeDetectorRef) {
    super(_cdr);
  }
}
