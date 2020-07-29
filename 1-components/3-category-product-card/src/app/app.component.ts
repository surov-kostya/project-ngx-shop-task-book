import { Component } from '@angular/core';
import { productData } from '../../../../shared/mocks/mock-product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public productData = productData;
  public terminalMessage: string;
  public title = '1. Интерполяция и связывание';
  public toCart(event: string) {
    this.terminalMessage = event;
  }
  public goToProduct(event: string) {
    this.terminalMessage = event;
  }
}
