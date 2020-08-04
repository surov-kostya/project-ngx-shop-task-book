import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { CategoryProductComponent } from './product-card.component';
import { productData } from '../../../../../shared/mocks/mock-product';

describe('[Moдуль 1]  Компонент товара', () => {
  let fixture: ComponentFixture<CategoryProductComponent>;
  let component: CategoryProductComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryProductComponent],
    });
    fixture = TestBed.createComponent(CategoryProductComponent);
    component = fixture.componentInstance;
    (component as any).product = productData;
    fixture.detectChanges();
  });

  it('компонент должен иметь публичный метод "addToBasket()"', () => {
    expect((component as any).addToBasket).toBeTruthy();
  });

  it('компонент должен иметь публичный Output свойство toCart', () => {
    expect((component as any).toCart).toBeTruthy();
  });

  it('компонент должен иметь метод redirectTo и Output свойства goToProduct', () => {
    expect((component as any).goToProduct).toBeTruthy();
    expect((component as any).redirectTo).toBeTruthy();
  });

  it('компонент должен иметь свойство toCart и декоратор Output этого свойства', () => {
    expect(component.hasOwnProperty('toCart')).toBeTruthy();
    expect((component as any)?.toCart).toBeInstanceOf(EventEmitter);
  });
  it('компонент должен иметь свойство product и декоратор Input этого свойства', () => {
    expect(component.hasOwnProperty('product')).toBeTruthy();
  });
  it('клик на кнопку "Добавить в корзину" должен вызывать метод addToBasket()', () => {
    spyOn(component as any, 'addToBasket').and.callThrough();
    const toCartSpy = spyOn(
      (component as any).toCart,
      'emit'
    ).and.callThrough();
    const icon = fixture.debugElement.query(By.css('.btn'));
    icon.triggerEventHandler('click', null);
    expect((component as any).addToBasket).toHaveBeenCalledBefore(toCartSpy);
    expect((component as any).toCart.emit).toHaveBeenCalled();
  });

  //
  it('клик на кнопку "Добавить в корзину" должен вызывать метод addToBasket()', () => {
    spyOn(component as any, 'redirectTo').and.callThrough();
    const goToProductSpy = spyOn(
      (component as any).goToProduct,
      'emit'
    ).and.callThrough();
    const icon = fixture.debugElement.query(By.css('.btn'));
    icon.triggerEventHandler('click', null);
    expect((component as any).redirectTo).toHaveBeenCalledBefore(
      goToProductSpy
    );
    expect((component as any).goToProduct.emit).toHaveBeenCalled();
  });
  //

  it('тег с селектором .product-name должен правильно интерполировать имя товара', () => {
    const titleEL = fixture.debugElement.query(By.css('.product-name'));
    expect(titleEL).toBeTruthy();
    const { name } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(name);
  });
  it('тег img должен иметь правильное связывание свойств src через пайп и alt', () => {
    const imgEL = fixture.debugElement.query(By.css('.img'));
    expect(imgEL).toBeTruthy();
    const { name } = (component as any)?.product;
    const src = (component as any)?.product.images[0].url;
    expect(imgEL.attributes.src).toEqual(src);
    expect(imgEL.attributes.alt).toEqual(name);
  });

  it('тег с селектором .product-name должен правильно интерполировать имя товара', () => {
    const titleEL = fixture.debugElement.query(By.css('.product-name'));
    expect(titleEL).toBeTruthy();
    const { name } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(name);
  });

  it('тег с селектором .rate-amount должен правильно интерполировать рейтинг товара', () => {
    const titleEL = fixture.debugElement.query(By.css('.rate-amount'));
    expect(titleEL).toBeTruthy();
    const { feedbacksCount } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(Number(titleNode.textContent.slice(0, length - 8).trim())).toEqual(
      feedbacksCount
    );
  });
  it('тег с селектором .price-text должен правильно интерполировать цену товара', () => {
    const titleEL = fixture.debugElement.query(By.css('.price-text'));
    expect(titleEL).toBeTruthy();
    const { price } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(Number(titleNode.textContent.slice(1).trim())).toEqual(price);
  });
});
