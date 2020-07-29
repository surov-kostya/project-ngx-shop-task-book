import { Component } from '@angular/core';
import { IProduct } from '../../../../shared/interfaces/product.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'Сервис получения рекомендуемых товаров';
}
