import { ReviewPipe } from '../shared/review.pipe';
import { RatePipe } from '../shared/rate.pipe';

import { InformationComponent } from './information/information.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarRatingComponent } from './information/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    InformationComponent,
    RatePipe,
    ReviewPipe,
    StarRatingComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
// @ts-ignore
export class AppModule {}
