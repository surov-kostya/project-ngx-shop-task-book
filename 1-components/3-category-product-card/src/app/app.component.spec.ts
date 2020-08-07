import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { CategoryProductComponent } from './product-card/product-card.component';
import { productData } from 'shared/mocks/mock-product';

describe('[Модуль1: Category product card: app.component.spec]', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CategoryProductComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('компонент должен быть добавлен в html шаблон', () => {
    const categoryProductEL = fixture.debugElement.query(
      By.directive(CategoryProductComponent)
    );
    expect(categoryProductEL).toBeTruthy();
  });
  it('компонент должен иметь кастомное свойство: "productData"', () => {
    (component as any).productData === undefined
      ? expect((component as any).productData).toBeUndefined()
      : expect((component as any).productData).toEqual(productData);
  });
  it('компонент должен иметь публичное свойство "terminalMessage" с типом данных: string ', () => {
    expect((component as any).terminalMessage).toEqual('');
  });
  it('компонент должен иметь публичное свойство "title" с типом данных: string ', () => {
    expect((component as any).terminalMessage).toEqual('');
  });
  it('компонент должен иметь публичный метод: "toCart"', () => {
    expect((component as any).toCart).toBeTruthy();
  });
  it('компонент должен иметь публичный метод: "goToProduct"', () => {
    expect((component as any).goToProduct).toBeTruthy();
  });
  it('компонент должен иметь публичный метод: "goToProduct"', () => {
    expect((component as any).goToProduct).toBeTruthy();
  });
  //  tslint:disable-next-line:max-line-length
  it('тег с селектором .terminalValue должен быть в шаблоне и правильно интерполировать значение переменной "terminalMessage"', () => {
    const terminalEL = fixture.debugElement.query(By.css('.terminalValue'));
    expect(terminalEL).toBeTruthy();
    const [{ nativeNode: terminalNode }] = terminalEL.childNodes;
    expect(terminalNode.textContent.trim()).toEqual(
      (component as any)?.terminalMessage
    );
  });

  it('должен вызываться публичный метод toCart()', () => {
    const toCartSpy = spyOn(component as any, 'toCart').and.callThrough();
    (component as any).toCart();
    expect(toCartSpy).toHaveBeenCalled();
  });
  it('должен вызываться публичный метод goToProduct()', () => {
    const redirectToSpy = spyOn(
      component as any,
      'goToProduct'
    ).and.callThrough();
    (component as any).goToProduct();
    expect(redirectToSpy).toHaveBeenCalled();
  });

  it('при вызове функции toCart(), должно меняться значение переменной "terminalMessage" на строку: "Вы добавили товар в корзину"', () => {
    (component as any).toCart();
    expect((component as any)?.terminalMessage).toEqual(
      'Вы добавили товар в корзину'
    );
  });
  // tslint:disable-next-line:max-line-length
  it('при вызове функции goToProduct(), должно меняться значение переменной "terminalMessage" на строку: "Переход на компонент товара"', () => {
    (component as any).goToProduct();
    expect((component as any)?.terminalMessage).toEqual(
      'Переход на компонент товара'
    );
  });

  xit('должен вызываться публичный метод toCart(), при клике на кнопку с селектором .add-to-cart-btn', () => {
    const addToCartSry = spyOn(component as any, 'toCart').and.callThrough();
    const addToCertBtn = fixture.debugElement
      .query(By.directive(CategoryProductComponent))
      .query(By.css('.add-to-cart-btn'));
    addToCertBtn.triggerEventHandler('click', null);
    expect(addToCartSry).toHaveBeenCalled();
  });
  xit('должен вызываться публичный метод redirectTo(), при клике на кнопку с селектором .description-col', () => {
    const addToCartSry = spyOn(
      component as any,
      'goToProduct'
    ).and.callThrough();
    const addToCertBtn = fixture.debugElement
      .query(By.directive(CategoryProductComponent))
      .query(By.css('.description-col'));
    addToCertBtn.triggerEventHandler('click', null);
    expect(addToCartSry).toHaveBeenCalled();
  });
});
