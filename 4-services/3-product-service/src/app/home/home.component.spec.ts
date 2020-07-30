import { SideMenuComponent } from './../../../../../3-directive/6-home-category-dropdown/solution/side-menu/side-menu.component';
import { InterceptorService } from './../services/interceptor.service';
import { ReviewPipe } from '../../shared/review.pipe';
import { ImgUrlPipe } from '../../shared/img-url.pipe';
import { HomeComponent } from './home.component';
import { TestBed, inject } from '@angular/core/testing';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsService } from '../services/products.service';
import { CategoriesService } from '../services/categories.service';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BASE_URL_TOKEN } from '../config';
import { environment } from 'environments/environment';
import { BannerSliderComponent } from './banner/banner.component';
import { suggestedProducts } from 'shared/mocks/suggested.mock';

describe('[Moдуль 4]  Сервисы для отображения  Home Component', () => {
  let httpMocked: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ProductCardComponent,
        ImgUrlPipe,
        ReviewPipe,
        SideMenuComponent,
        BannerSliderComponent,
      ],
      providers: [
        ProductsService,
        CategoriesService,
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
      http.get('/suggested').subscribe();
      const httpReq = httpMocked.expectOne({
        method: 'GET',
        url: `${baseUrl}/suggested`,
      });
      console.log(httpReq.request.headers.has('Content-Type'));
      expect(httpReq.request.headers.has('Content-Type')).toBeTruthy();
    }
  ));

  it('должен верно преобразовать', inject(
    [HttpClient, BASE_URL_TOKEN],
    (http: HttpClient, baseUrl: string) => {
      http.get('/suggested').subscribe((response) => {
        expect(response).toEqual(suggestedProducts);
      });
      const httpReq = httpMocked.expectOne({
        method: 'GET',
        url: `${baseUrl}/suggested`,
      });
      httpReq.flush({
        data: suggestedProducts,
        error: null,
      });
    }
  ));
});
