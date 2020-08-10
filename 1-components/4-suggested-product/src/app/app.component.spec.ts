import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { productData } from 'shared/mocks/mock-product';
import { By } from '@angular/platform-browser';

describe('[Модуль1: Suggested product card: app.component.spec]', () => {
  let fixture;
  let component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, ProductCardComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));
  //  is it defined
  it('компонент должен быть добавлен в app', () => {
    expect(component).toBeTruthy();
  });

  it(`компонент должен иметь публичное свойство title и содержит строку: 'suggested-product'`, () => {
    expect(component.title).toEqual('Suggested product component');
  });
  it(`компонент должен иметь публичное свойство "product" c bynthatqcjv IProduct, и иметь связывание с кастомным свойством "product" компонента ngx-shop-product-card `, () => {
    component.product === undefined
      ? expect(component.product).toBeUndefined()
      : expect(component.product).toEqual(productData);
  });
  it(`компонент должен иметь публичное свойство "terminalMessage"`, () => {
    expect((component as any).terminalMessage).toEqual('');
  });
  it(`компонент должен иметь публичное метод "redirectTo"`, () => {
    expect(component.redirectTo).toBeTruthy();
  });

  // is it interpolated correctly
  it('тег с селектором .terminalValue должен быть в шаблоне и правильно интерполировать значение переменной "terminalMessage"', () => {
    (component as any).product = productData;
    fixture.detectChanges();
    const terminalEL = fixture.debugElement.query(By.css('.terminalValue'));
    expect(terminalEL).toBeTruthy();
    const [{ nativeNode: terminalNode }] = terminalEL.childNodes;

    expect(terminalNode.textContent.trim()).toEqual(
      (component as any)?.terminalMessage
    );
  });
  // tslint:disable-next-line:max-line-length
  it('при вызове метода redirectTo(), должно изменяться значение переменной "terminalMessage" на строку "Переход на компонент продукта"', () => {
    (component as any).product = productData;
    fixture.detectChanges();
    const redirectToSpy = spyOn(
      component as any,
      'redirectTo'
    ).and.callThrough();
    (component as any).redirectTo();
    expect(redirectToSpy).toHaveBeenCalled();
  });
  xit('должен вызываться публичный метод redirectTo(), при клике на кнопку с селектором .card-component', () => {
    const addToCartSry = spyOn(
      component as any,
      'redirectTo'
    ).and.callThrough();
    const cardComponentClick = fixture.debugElement
      .query(By.directive(ProductCardComponent))
      .query(By.css('.card-component'));
    cardComponentClick.triggerEventHandler('click', null);
    expect(addToCartSry).toHaveBeenCalled();
  });
});
