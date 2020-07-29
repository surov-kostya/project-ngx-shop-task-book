import { suggestedProducts } from './../../../../shared/mocks/suggested.mock';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public terminalMessage: any = '';
  public productImages = suggestedProducts[4].images;
  public title = 'Слайдер компонент';
}
