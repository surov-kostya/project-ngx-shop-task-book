import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ShopCardComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    spyOn(component as any, 'increment').and.callThrough();
    fixture.detectChanges();
  });

  it('должен вызываться публичный метод decrement()', () => {
    const decrementBtn = fixture.debugElement
      .query(By.directive(ShopCardComponent))
      .query(By.css('.count-decrement'));
    decrementBtn.triggerEventHandler('click', null);
    decrementBtn.triggerEventHandler('click', null);
    expect(component.terminalMessage).toEqual('Уменьшение количества товара');
  });
  it('должен вызываться публичный метод increment()', () => {
    const incrementBtn = fixture.debugElement
      .query(By.directive(ShopCardComponent))
      .query(By.css('.count-increment'));
    incrementBtn.triggerEventHandler('click', null);
    expect(component.terminalMessage).toEqual('Увеличение количества товара');
  });
  it('компонент должен иметь публичное свойство terminalMessage с типом данных: строка ', () => {
    expect((component as any).terminalMessage).toEqual('');
  });
  it('компонент должен иметь публичный метод increment()', () => {
    expect((component as any).increment).toBeTruthy();
  });
  it('компонент должен иметь публичный метод decrement()', () => {
    expect((component as any).decrement).toBeTruthy();
  });

  it('компонент app-shop-card добавлен в html шаблон', () => {
    const shopCardEL = fixture.debugElement.query(
      By.directive(ShopCardComponent)
    );
    expect(shopCardEL).toBeTruthy();
  });
  it('компонент app-shop-card имеет input свойство "product", и output: "increment","decrement"', () => {
    const shopCardEL = fixture.debugElement.query(
      By.directive(ShopCardComponent)
    );
    const { decrement, product, increment } = shopCardEL.componentInstance;
    expect(decrement).toBeTruthy();
    expect(product).toBeTruthy();
    expect(increment).toBeTruthy();
  });

  it('компонент app-shop-card доджен  быть добавлен в html шаблон', () => {
    const shopCardEL = fixture.debugElement.query(
      By.directive(ShopCardComponent)
    );
    expect(shopCardEL).toBeTruthy();
  });
  // tslint:disable-next-line:max-line-length
  it('тег с селектором .terminalValue должен иметь привязку данных и правильно интерполировать значение переменной "terminalMessage"', () => {
    const terminalEL = fixture.debugElement.query(By.css('.terminalValue'));
    expect(terminalEL).toBeTruthy();
    const [{ nativeNode: terminalNode }] = terminalEL.childNodes;
    expect(terminalNode.textContent.trim()).toEqual(
      (component as any)?.terminalMessage
    );
  });

  // it('Pisun', () => {
  //   const incrementBtn = fixture.debugElement
  //     .query(By.directive(ShopCardComponent))
  //     .query(By.css('.count-decrement'));
  //   incrementBtn.triggerEventHandler('click', null);
  //   expect(component.terminalMessage).toEqual('Уменьшение количества товара');
  // });
});
