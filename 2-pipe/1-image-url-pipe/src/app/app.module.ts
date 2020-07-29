import { ImgUrlPipe } from './../../solution/pipe/img-url.pipe';
import { ShopCardComponent } from './shop-card/shop-card.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, ShopCardComponent, ImgUrlPipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
