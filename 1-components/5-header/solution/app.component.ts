import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public terminalMessage: string;
  public title = 'Header';
  public redirectTo() {
    this.terminalMessage = 'Переход на компонент корзины';
  }
}
