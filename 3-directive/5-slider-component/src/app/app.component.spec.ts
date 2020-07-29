import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ProductSliderComponent],
    }).compileComponents();
  }));

  it('должен создать компонент app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`компонент должен иметь свойство title c значением 'Слайдер компонент'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Слайдер компонент');
  });
});
