import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { BrowserModule } from '@angular/platform-browser';
import { SideMenuComponent } from './home/side-menu/side-menu.component';
import { BannerSliderComponent } from './home/banner/banner.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent,
        SideMenuComponent,
        BannerSliderComponent,
      ],
      providers: [ProductsService, CategoriesService],
      imports: [BrowserModule, BrowserAnimationsModule],
    }).compileComponents();
  }));
  it(`компонент должен иметь свойство title 'Сервис получения рекомендуемых товаров'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Сервис получения рекомендуемых товаров');
  });
});
