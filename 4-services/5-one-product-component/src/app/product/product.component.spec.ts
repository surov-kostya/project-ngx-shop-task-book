import { oneProduct } from './../../../../../shared/mocks/oneProductMock';
import { RatePipe } from './../../../../../2-pipe/2-rate-pipe/solution/pipes/rate.pipe';
import { DescriptionComponent } from './description/description.component';
import { StarRatingComponent } from './information/star-rating/star-rating.component';
import { ProductComponent } from './product.component';
import { InterceptorService } from '../services/interceptor.service';
import { ReviewPipe } from '../shared/review.pipe';
import { ImgUrlPipe } from '../shared/img-url.pipe';
import { TestBed, inject } from '@angular/core/testing';
import { ProductsService } from '../services/products.service';

import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_URL_TOKEN } from '../config';
import { environment } from 'environments/environment';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { InformationComponent } from './information/information.component';

describe('[Moдуль 4]  Сервис для отображения OneProduct', () => {
  let httpMocked: HttpTestingController;
  let productId = '238-monoblok-asus-v241fak-ba034d-90pt0292-m03040';

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductComponent,
        ImgUrlPipe,
        ReviewPipe,
        RatePipe,
        StarRatingComponent,
        ProductSliderComponent,
        DescriptionComponent,
        InformationComponent,
      ],
      providers: [
        ProductsService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
        {
          provide: BASE_URL_TOKEN,
          useValue: environment.baseUrl,
        },
      ],
      imports: [
        BrowserModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
    });
    httpMocked = TestBed.inject(HttpTestingController);
  });
  it('should has auth header', inject(
    [HttpClient, BASE_URL_TOKEN],
    (http: HttpClient, baseUrl: string) => {
      http.get(`products/${productId}`).subscribe((item) => console.log(item));
      const httpReq = httpMocked.expectOne({
        method: 'GET',
        url: `${baseUrl}products/${productId}`,
      });

      expect(httpReq.request.headers.has('Content-Type')).toBeTruthy();
    }
  ));

  it('должен верно преобразовать', inject(
    [HttpClient, BASE_URL_TOKEN],
    (http: HttpClient, baseUrl: string) => {
      http.get(`products/${productId}`).subscribe((response) => {
        expect(response).toEqual(oneProduct);
      });
      const httpReq = httpMocked.expectOne({
        method: 'GET',
        url: `${baseUrl}products/${productId}`,
      });
      httpReq.flush({
        data: oneProduct,
        error: null,
      });
    }
  ));
});
