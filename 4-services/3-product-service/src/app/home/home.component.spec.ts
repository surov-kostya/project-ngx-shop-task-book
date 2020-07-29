import { InterceptorService } from './../services/interceptor.service';
import { ReviewPipe } from '../../shared/review.pipe';
import { ImgUrlPipe } from '../../shared/img-url.pipe';
import { HomeComponent } from './home.component';
import { suggestedProducts } from './../../../../../shared/mocks/suggested.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductsService } from '../services/products.service';
import { CategoriesService } from '../services/categories.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('[Moдуль 4]  Сервисы для отображения  Home Component', () => {
  let fixture: ComponentFixture<HomeComponent>;
  let component: HomeComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        ProductCardComponent,
        ImgUrlPipe,
        ReviewPipe,
      ],
      providers: [
        ProductsService,
        CategoriesService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: InterceptorService,
          multi: true,
        },
      ],
      imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    (component as any).suggestedProducts = suggestedProducts;
    fixture.detectChanges();
  });

  it('компонент должен иметь свойство suggestedProducts ', () => {
    expect((component as any).suggestedProducts).toBeTruthy();
  });
});
