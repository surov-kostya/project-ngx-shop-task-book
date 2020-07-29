import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { IProduct } from '../../../../../shared/interfaces/product.interface';

@Component({
  selector: 'ngx-shop-product-description',
  templateUrl: './description.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// @ts-ignore
export class DescriptionComponent {
  @Input() public product!: IProduct;
  @Output()
  public addFeedbackEmiter: EventEmitter<string> = new EventEmitter<string>();
  public isShowDescription = true;
  public close!: () => void;
  public save!: (value: object) => void;
  public toggleTab(): void {
    this.isShowDescription = !this.isShowDescription;
  }
  public addFeedback(feedback: string) {
    this.addFeedbackEmiter.emit(feedback);
  }
}
