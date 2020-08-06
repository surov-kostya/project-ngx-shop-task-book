import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { By } from '@angular/platform-browser';
import { cartProducts } from 'shared/mocks/cart.mock';

describe('[Модуль1: Shop card: app.component.spec]', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ShopCardComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен быть добавлен в html шаблон', () => {
    const shopCardEL = fixture.debugElement.query(
      By.directive(ShopCardComponent)
    );
    expect(shopCardEL).toBeTruthy();
  });
  it('компонент должен иметь публичное свойство "terminalMessage" с типом данных: string ', () => {
    expect((component as any).terminalMessage).toEqual('');
  });
  it('компонент должен иметь публичный метод: "increment"', () => {
    expect((component as any).increment).toBeTruthy();
  });

  it('компонент должен иметь публичный метод: "decrement"', () => {
    expect((component as any).decrement).toBeTruthy();
  });
  it('компонент должен иметь свойство "product"', () => {
    (component as any).product === undefined
      ? expect((component as any).product).toBeUndefined()
      : expect((component as any).product).toEqual(cartProducts[0]);
  });
  it('свойство "product" должно брать данные из мок файла cartProducts[0] ', () => {
    expect((component as any).product).toEqual(cartProducts[0]);
  });
  // tslint:disable-next-line:max-line-length
  it('тег с селектором .terminalValue должен правильно интерполировать значение переменной "terminalMessage"', () => {
    const terminalEL = fixture.debugElement.query(By.css('.terminalValue'));
    expect(terminalEL).toBeTruthy();
    const [{ nativeNode: terminalNode }] = terminalEL.childNodes;
    expect(terminalNode.textContent.trim()).toEqual(
      (component as any)?.terminalMessage
    );
  });
  it('должен вызываться публичный метод increment()', () => {
    const incrementSry = spyOn(component as any, 'increment').and.callThrough();
    (component as any).increment();
    expect(incrementSry).toHaveBeenCalled();
  });
  it('должен вызываться публичный метод decrement()', () => {
    const incrementSry = spyOn(component as any, 'decrement').and.callThrough();
    (component as any).decrement();
    expect(incrementSry).toHaveBeenCalled();
  });
  it('при вызове публичного метода decrement() значение публичного свойства "terminalMessage" должно быть изменено на строку "Уменьшение количества товара" ', () => {
    (component as any).decrement();
    expect((component as any).terminalMessage).toEqual(
      'Уменьшение количества товара'
    );
  });
  it('при вызове публичного метода increment() значение публичного свойства "terminalMessage" должно быть изменено на строку "Увеличение количества товара"', () => {
    const incrementSry = spyOn(component as any, 'increment').and.callThrough();
    (component as any).increment();
    expect((component as any).terminalMessage).toEqual(
      'Увеличение количества товара'
    );
  });

  it('при вызове публичного метода "decrement()", должно изменяться значение публичного свойства "terminalMessage" на строку "Уменьшение количества товара"', () => {
    const decrementSpy = spyOn(component as any, 'decrement').and.callThrough();
    (component as any).decrement();
    expect(decrementSpy).toHaveBeenCalled();
    expect((component as any)?.terminalMessage).toEqual(
      'Уменьшение количества товара'
    );
  });
  it('при вызове публичного метода "increment()", должно изменяться значение публичного свойства "terminalMessage" на строку "Увеличение количества товара"', () => {
    const incrementSpy = spyOn(component as any, 'increment').and.callThrough();
    (component as any).increment();
    expect(incrementSpy).toHaveBeenCalled();
    expect((component as any)?.terminalMessage).toEqual(
      'Увеличение количества товара'
    );
  });
  xit('должен вызываться публичный метод decrement(), при клике на кнопку с селектором .count-decrement компонента app-shop-card', () => {
    const decrementSry = spyOn(component as any, 'decrement').and.callThrough();
    const decrementBtn = fixture.debugElement
      .query(By.directive(ShopCardComponent))
      .query(By.css('.count-decrement'));
    decrementBtn.triggerEventHandler('click', null);
    expect(decrementSry).toHaveBeenCalled();
  });
  xit('должен вызываться публичный метод increment(), при клике на кнопку с селектором .count-increment компонента app-shop-card', () => {
    const incrementSry = spyOn(component as any, 'increment').and.callThrough();
    const decrementBtn = fixture.debugElement
      .query(By.directive(ShopCardComponent))
      .query(By.css('.count-increment'));
    decrementBtn.triggerEventHandler('click', null);
    expect(incrementSry).toHaveBeenCalled();
  });
});
