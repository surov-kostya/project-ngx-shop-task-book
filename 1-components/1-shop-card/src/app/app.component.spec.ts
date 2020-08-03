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

  it('компонент должен иметь публичный метод increment()', () => {
    expect((component as any).increment).toBeTruthy();
  });
  it('компонент должен иметь публичный метод decrement()', () => {
    expect((component as any).decrement).toBeTruthy();
  });

  // и изменять значение публичного свойства terminalMessage и изменить значение поля count в объекте product
  it('должен вызываться публичный метод decrement(), при клике на кнопку с селектором .count-decrement, проверьте связывание Output свойство decrement компонента app-shop-card с методом decrement() app компонента ', () => {
    const { count } = component.product;
    const decrementBtn = fixture.debugElement
      .query(By.directive(ShopCardComponent))
      .query(By.css('.count-decrement'));
    decrementBtn.triggerEventHandler('click', null);
    // expect(decrementBtn).toHaveBeenCalled();

    // expect(component.product.count).toEqual(count - 1);
    // expect((component as any)?.terminalMessage).toEqual(
    //   'Уменьшение количества товара'
    // );
  });
  // //////
  // it('компонент должен иметь публичное свойство terminalMessage с типом данных: строка ', () => {
  //   expect((component as any).terminalMessage).toEqual('');
  // });

  // it('компонент app-shop-card добавлен в html шаблон', () => {
  //   const shopCardEL = fixture.debugElement.query(
  //     By.directive(ShopCardComponent)
  //   );
  //   expect(shopCardEL).toBeTruthy();
  // });

  // it('должен вызываться публичный метод increment(), при клике на кнопку с селектором .count-increment и изменять значение публичного свойства terminalMessage , a также поля count в объекте product, проверьте связывание Output свойство increment компонента app-shop-card с методом increment() app компонента', () => {
  //   const { count } = component.product;
  //   const incrementBtn = fixture.debugElement
  //     .query(By.directive(ShopCardComponent))
  //     .query(By.css('.count-increment'));
  //   incrementBtn.triggerEventHandler('click', null);

  //   expect(component.product.count).toEqual(count + 1);
  //   expect((component as any)?.terminalMessage).toEqual(
  //     'Увеличение количества товара'
  //   );
  // });

  // it('компонент app-shop-card имеет output свойство: "increment"', () => {
  //   const shopCardEL = fixture.debugElement.query(
  //     By.directive(ShopCardComponent)
  //   );
  //   const { increment } = shopCardEL.componentInstance;
  //   expect(increment).toBeTruthy();
  // });
  // it('компонент app-shop-card имеет output свойство: "decrement"', () => {
  //   const shopCardEL = fixture.debugElement.query(
  //     By.directive(ShopCardComponent)
  //   );
  //   const { decrement } = shopCardEL.componentInstance;
  //   expect(decrement).toBeTruthy();
  // });
  // it('компонент app-shop-card имеет input свойство "product"', () => {
  //   const shopCardEL = fixture.debugElement.query(
  //     By.directive(ShopCardComponent)
  //   );
  //   const { product } = shopCardEL.componentInstance;
  //   expect(product).toBeTruthy();
  // });
  // it('компонент app-shop-card должен  быть добавлен в html шаблон', () => {
  //   const shopCardEL = fixture.debugElement.query(
  //     By.directive(ShopCardComponent)
  //   );
  //   expect(shopCardEL).toBeTruthy();
  // });
  // // tslint:disable-next-line:max-line-length
  // it('тег с селектором .terminalValue должен иметь привязку данных и правильно интерполировать значение переменной "terminalMessage"', () => {
  //   const terminalEL = fixture.debugElement.query(By.css('.terminalValue'));
  //   expect(terminalEL).toBeTruthy();
  //   const [{ nativeNode: terminalNode }] = terminalEL.childNodes;
  //   expect(terminalNode.textContent.trim()).toEqual(
  //     (component as any)?.terminalMessage
  //   );
  // });
});
