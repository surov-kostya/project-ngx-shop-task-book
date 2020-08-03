import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = '1. Интерполяция и связывание.footer';
  public author: string = environment.author;
  public currentYear: number = new Date().getFullYear();
}
