import { ProductsService } from './../services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../../../shared/interfaces/product.interface';

@Component({
  selector: 'ngx-shop-product',
  templateUrl: './product.component.html',
})
// @ts-ignore
export class ProductComponent implements OnInit {
  constructor(private readonly _productService: ProductsService) {}
  public product: IProduct;
  public ngOnInit(): void {
    this._productService
      .getProductById('238-monoblok-asus-v241fak-ba034d-90pt0292-m03040')
      .subscribe((product) => (this.product = product));
  }
}
