import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  slideAnimation,
  initSliderAnimation,
  Slider,
} from '../../../../../../shared/utils/slider';

export interface IBanner {
  subCategoryId: string;
  title: string;
  image: string;
}

@Component({
  selector: 'ngx-shop-banner',
  templateUrl: './banner.component.html',
  animations: [slideAnimation, initSliderAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class BannerSliderComponent extends Slider<IBanner> {
  @Input()
  // @ts-ignore
  public items: IBanner[] = [];
  @Output()
  public suggestedCategory: EventEmitter<string> = new EventEmitter<string>();
  constructor(private readonly _cdr: ChangeDetectorRef) {
    super(_cdr);
  }
}
