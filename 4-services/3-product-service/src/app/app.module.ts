import { CategoriesService } from './services/categories.service';
import { BannerSliderComponent } from './home/banner/banner.component';
import { SideMenuComponent } from './home/side-menu/side-menu.component';
import { ReviewPipe } from '../shared/review.pipe';
import { RatePipe } from '../shared/rate.pipe';
import { ImgUrlPipe } from '../shared/img-url.pipe';
import { HomeComponent } from './home/home.component';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { InterceptorService } from './services/interceptor.service';
import { ProductsService } from './services/products.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductCardComponent,
    ImgUrlPipe,
    RatePipe,
    ReviewPipe,
    SideMenuComponent,
    BannerSliderComponent,
  ],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
  providers: [
    ProductsService,
    CategoriesService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
