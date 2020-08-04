import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { CategoryProductComponent } from './product-card/product-card.component';

describe('[Модуль1: Shop card: app.component.spec]', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let incrementSry: jasmine.Spy;
  let decrementSry: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CategoryProductComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    incrementSry = spyOn(component as any, 'increment').and.callThrough();
    decrementSry = spyOn(component as any, 'decrement').and.callThrough();
    fixture.detectChanges();
  });

  // it('компонент должен иметь публичное свойство terminalMessage с типом данных: string ', () => {
  //   expect((component as any).terminalMessage).toEqual('');
  // });

  // it('компонент app-shop-card должен быть добавлен в html шаблон', () => {
  //   const shopCardEL = fixture.debugElement.query(
  //     By.directive(ShopCardComponent)
  //   );
  //   expect(shopCardEL).toBeTruthy();
  // });
  // it('компонент app.component должен иметь публичный метод: "increment"', () => {
  //   expect((component as any).increment).toBeTruthy();
  // });

  // it('компонент app.component должен иметь oпубличный метод: "decrement"', () => {
  //   expect((component as any).decrement).toBeTruthy();
  // });
  // it('компонент app.component должен иметь свойство "product"', () => {
  //   expect((component as any).product).toBeTruthy();
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
  // it('должен вызываться публичный метод decrement(), при клике на кнопку с селектором .count-decrement', () => {
  //   const decrementBtn = fixture.debugElement
  //     .query(By.directive(ShopCardComponent))
  //     .query(By.css('.count-decrement'));
  //   decrementBtn.triggerEventHandler('click', null);
  //   expect(decrementSry).toHaveBeenCalled();
  // });
  // it('должен вызываться публичный метод increment(), при клике на кнопку с селектором .count-increment', () => {
  //   const decrementBtn = fixture.debugElement
  //     .query(By.directive(ShopCardComponent))
  //     .query(By.css('.count-increment'));
  //   decrementBtn.triggerEventHandler('click', null);
  //   expect(incrementSry).toHaveBeenCalled();
  // });

  // it('при клике на кнопку с селектором .count-decrement, должно изменяться значение публичного свойства "terminalMessage" на строку "Уменьшение количества товара" в AppComponent, по средствам вызова метода decrement', () => {
  //   const decrementBtn = fixture.debugElement
  //     .query(By.directive(ShopCardComponent))
  //     .query(By.css('.count-decrement'));
  //   decrementBtn.triggerEventHandler('click', null);
  //   expect((component as any)?.terminalMessage).toEqual(
  //     'Уменьшение количества товара'
  //   );
  // });
  // it('при клике на кнопку с селектором .count-increment, должно изменяться значение публичного свойства "terminalMessage" на строку "Увеличение количества товара" в AppComponent, по средствам вызова метода increment', () => {
  //   const decrementBtn = fixture.debugElement
  //     .query(By.directive(ShopCardComponent))
  //     .query(By.css('.count-increment'));
  //   decrementBtn.triggerEventHandler('click', null);
  //   expect((component as any)?.terminalMessage).toEqual(
  //     'Увеличение количества товара'
  //   );
  // });
});
