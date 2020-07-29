import { RatePipe } from './../../../../2-pipe/2-rate-pipe/src/shared/rate.pipe';
import { ReviewPipe } from './../../../2-cart-component/src/shared/review.pipe';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InformationComponent } from './information/information.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, InformationComponent, ReviewPipe, RatePipe],
    }).compileComponents();
  }));

  it('должен быть создан компонент app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`компонент должен иметь свойство title 'Компонент информации о продукте'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Компонент информации о продукте');
  });
});
