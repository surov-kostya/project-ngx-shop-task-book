import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { FeedbacksComponent } from './description/feedbacks/feedbacks.component';
import { RatingComponent } from './description/feedbacks/rating/rating.component';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    FeedbacksComponent,
    RatingComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
