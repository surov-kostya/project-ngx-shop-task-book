import { CartProductComponent } from './cart-component/cart-product/cart-product.component';
import { CartComponent } from './cart-component/cart.component';
import { LocalStorageService } from './services/local-storage.service';
import { ReviewPipe } from './shared/review.pipe';
import { RatePipe } from './shared/rate.pipe';
import { ImgUrlPipe } from './shared/img-url.pipe';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ImgUrlPipe,
    RatePipe,
    ReviewPipe,
    AppComponent,
    CartComponent,
    CartProductComponent,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    LocalStorageService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: InterceptorService,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
