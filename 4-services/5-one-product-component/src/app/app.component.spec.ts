import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  // it('должен создать app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`компонент должен иметь свойство title 'Сервис получения данных о продукте'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('Сервис получения данных о продукте');
  // });
});
