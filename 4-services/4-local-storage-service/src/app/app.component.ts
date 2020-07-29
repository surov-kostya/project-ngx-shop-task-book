import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(private readonly _productsService: ProductsService) {}
  public suggestedProducts;
  public title = 'local-storage-service';
  public terminalMessage: any = '';
  public ngOnInit() {
    this._productsService
      .getSuggestedProducts()
      .subscribe((products) => (this.suggestedProducts = products));
  }
  ngDoCheck() {
    console.log(this.suggestedProducts);
  }

  redirectTo($event) {}
}
