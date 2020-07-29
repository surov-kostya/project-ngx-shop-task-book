import { Component } from '@angular/core';
import { oneProduct } from '../../../../shared/mocks/oneProductMock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
// @ts-ignore
export class AppComponent {
  public title = 'Компонент описания и отзывов продукта';
  public product = oneProduct;
  public terminalMessage = '';
  public addFeedback(feedback: string) {
    this.terminalMessage = feedback;
  }
}
