import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'review',
})
// @ts-ignore
export class ReviewPipe implements PipeTransform {
  public transform(countOfReviews: number | undefined): string {
    if (!countOfReviews) {
      return 'Нет отзывов';
    }

    if (
      Math.round(
        Math.abs(countOfReviews / 10 - Math.trunc(countOfReviews / 10)) * 10
      ) === 1 &&
      Math.round(
        Math.abs(countOfReviews / 100 - Math.trunc(countOfReviews / 100)) * 100
      ) !== 11
    ) {
      return `${countOfReviews} отзыв`;
    }

    if (countOfReviews < 5) {
      return `${countOfReviews} отзыва`;
    }

    if (
      Math.round(
        Math.abs(countOfReviews / 100 - Math.trunc(countOfReviews / 100)) * 100
      ) >= 5
    ) {
      return `${countOfReviews} отзывов`;
    }

    return '';
  }
}
