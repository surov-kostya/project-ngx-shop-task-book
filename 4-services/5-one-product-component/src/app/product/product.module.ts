import { RatePipe } from '../shared/rate.pipe';
import { ReviewPipe } from '../shared/review.pipe';
import { NgModule } from '@angular/core';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DescriptionComponent } from './description/description.component';
import { FeedbacksComponent } from './description/feedbacks/feedbacks.component';
import { InformationComponent } from './information/information.component';
import { StarRatingComponent } from './information/star-rating/star-rating.component';

@NgModule({
  declarations: [
    ProductComponent,
    DescriptionComponent,
    FeedbacksComponent,
    InformationComponent,
    ReviewPipe,
    RatePipe,
    StarRatingComponent,
  ],
  imports: [ProductRoutingModule, BrowserAnimationsModule],
})
// @ts-ignore
export class ProductModule {}
