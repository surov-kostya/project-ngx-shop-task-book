import { ReviewPipe } from './shared/review.pipe';
import { RatePipe } from './shared/rate.pipe';
import { ImgUrlPipe } from './shared/img-url.pipe';

import { HomeComponent } from './home/home.component';

import { CategoryProductComponent } from './home/product-card/product-card.component';
import { InterceptorService } from './services/interceptor.service';
import { ProductsService } from './services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CategoryProductComponent,
    ImgUrlPipe,
    RatePipe,
    ReviewPipe,
  ],
  imports: [BrowserModule, HttpClientModule],
  providers: [
    ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
