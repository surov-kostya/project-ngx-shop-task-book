import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IFeedback } from '../../../../../../shared/interfaces/product.interface';

@Component({
  selector: 'ngx-shop-feedbacks',
  templateUrl: './feedbacks.component.html',
  styleUrls: ['./feedbacks.component.sass'],
})
// @ts-ignore
export class FeedbacksComponent {
  @Input()
  public feedbacks!: IFeedback[];
  @Output()
  public addFeedbackEmiter: EventEmitter<string> = new EventEmitter();
  public async addFeedback(): Promise<void> {
    this.addFeedbackEmiter.emit(
      'Вы вызвали метод для добавления отзыва о данном товаре'
    );
  }
}
