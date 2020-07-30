import { cartProducts } from './../../../../shared/mocks/cart.mock';
import { suggestedProducts } from 'shared/mocks/suggested.mock';
import { LocalStorageService } from './services/local-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
// @ts-ignore
export class AppComponent implements OnInit {
  constructor(private readonly _localStorageService: LocalStorageService) {}

  public title = 'local-storage-service';
  public terminalMessage: any = '';
  public ngOnInit() {
    this._localStorageService.addToLocalStorage('cart', cartProducts);
  }

  redirectTo($event) {}
}
