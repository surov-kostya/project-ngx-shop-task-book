import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: FooterComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FooterComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  it('компонент должен иметь публичное  свойство "author", которое должно иметь связывание с  Input свойством "author" компонента ngx-shop-footer', () => {
    expect((component as any).author).toBeTruthy();
  });
  it('компонент должен иметь публичное  свойство "currentYear", которое должно иметь связывание с  Input свойством "currentYear" компонента ngx-shop-footer', () => {
    expect((component as any).currentYear).toBeTruthy();
  });
  it('компонент ngx-shop-footer добавлен в html шаблон', () => {
    const shopCardEL = fixture.debugElement.query(
      By.directive(FooterComponent)
    );
    expect(shopCardEL).toBeTruthy();
  });
  xit('компонент ngx-shop-footer имеет свойство "author","currentYear"', () => {
    const shopCardEL = fixture.debugElement.query(
      By.directive(FooterComponent)
    );
    const { author, currentYear } = shopCardEL.componentInstance;
    expect(author).toBeTruthy();
    expect(currentYear).toBeTruthy();
  });
});
