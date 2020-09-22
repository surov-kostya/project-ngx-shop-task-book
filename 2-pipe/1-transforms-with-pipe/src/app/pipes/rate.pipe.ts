import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rate',
})
// @ts-ignore
export class RatePipe implements PipeTransform {
  public transform(value: number): number | undefined {
    if (Math.abs(value - Math.trunc(value)) < 0.25) {
      return Math.round(value);
    }
    if (Math.abs(value - Math.trunc(value)) >= 0.75) {
      return Math.round(value);
    }
    if (
      Math.abs(value - Math.trunc(value)) < 0.75 &&
      Math.abs(value - Math.trunc(value)) >= 0.25
    ) {
      return Math.trunc(value) + 0.5;
    }
    return 0;
  }
}
