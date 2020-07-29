import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BannerSliderComponent } from './banner/banner.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, BannerSliderComponent],
    }).compileComponents();
  }));

  it('должен добавить компонент app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`компонент должен иметь свойство title c значением 'Баннер компонент'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Баннер компонент');
  });
});
