import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-shop-star-rating',
  templateUrl: './star-rating.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class StarRatingComponent {
  public coloredStar = '';
  public stars = [0, 1, 2, 3, 4];
  public highlight(index: number): void {}
}
