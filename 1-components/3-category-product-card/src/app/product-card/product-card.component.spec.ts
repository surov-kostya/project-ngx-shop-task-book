import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EventEmitter } from '@angular/core';
import { CategoryProductComponent } from './product-card.component';
import { productData } from '../../../../../shared/mocks/mock-product';

describe('[Модуль1: Category product card: product-card.component.spec]', () => {
  let fixture: ComponentFixture<CategoryProductComponent>;
  let component: CategoryProductComponent;
  let product = productData;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryProductComponent],
    });
    fixture = TestBed.createComponent(CategoryProductComponent);
    component = fixture.componentInstance;
  });
  //  is it defined
  it('компонент должен иметь кастомное свойство "product"', () => {
    expect((component as any).product).toBeTruthy();
  });
  it('компонент должен иметь публичный метод "addToBasket()"', () => {
    expect((component as any).addToBasket).toBeTruthy();
  });
  it('компонент должен иметь публичный метод "redirectTo()"', () => {
    expect((component as any).redirectTo).toBeTruthy();
  });
  it('компонент должен иметь кастомное EventEmitter событие "toCart()"', () => {
    expect((component as any).toCart).toBeTruthy();
  });
  it('кастомное событие "toCart()" должно быть экземпляром EventEmitter', () => {
    expect((component as any)?.toCart).toBeInstanceOf(EventEmitter);
  });
  it('компонент должен иметь кастомное EventEmitter событие "goToProduct()"', () => {
    expect((component as any).goToProduct).toBeTruthy();
  });
  it('кастомное событие "goToProduct" должно быть экземпляром EventEmitter', () => {
    expect((component as any).goToProduct).toBeInstanceOf(EventEmitter);
  });
  // is it interpolated correctly

  it('тег с селектором .product-name должен быть в шаблоне и правильно интерполировать значение ключа "name" объекта "product"', () => {
    (component as any).product = product;
    fixture.detectChanges();
    const titleEL = fixture.debugElement.query(By.css('.product-name'));
    expect(titleEL).toBeTruthy();
    const { name } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(name);
  });

  // tslint:disable-next-line:max-line-length
  it('тег с селектором .rate-amount должен быть в шаблоне и правильно интерполировать значение ключа "feedbacksCount" объекта "product"', () => {
    (component as any).product = product;
    fixture.detectChanges();
    const titleEL = fixture.debugElement.query(By.css('.rate-amount'));
    expect(titleEL).toBeTruthy();
    const { feedbacksCount } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(`${feedbacksCount} отзыва`);
  });
  // tslint:disable-next-line:max-line-length
  it('тег с селектором .price-text-media должен быть в шаблоне и правильно интерполировать значение ключа "price" объекта "product"', () => {
    (component as any).product = product;
    fixture.detectChanges();
    const titleEL = fixture.debugElement.query(By.css('.price-text-media'));
    expect(titleEL).toBeTruthy();
    const { price } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(`${price}€`);
  });
  it('тег с селектором .price-text должен быть в шаблоне и правильно интерполировать значение ключа "price" объекта "product"', () => {
    (component as any).product = product;
    fixture.detectChanges();
    const titleEL = fixture.debugElement.query(By.css('.price-text'));
    expect(titleEL).toBeTruthy();
    const { price } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(`${price}€`);
  });
  it('тег img должен иметь правильное связывание свойства src c значением свойства product.images[0].url объекта "product" ', () => {
    (component as any).product = product;
    fixture.detectChanges();
    const imgWrapEl = fixture.debugElement.query(By.css('.img'));
    expect(imgWrapEl).toBeTruthy();
    const {
      images: [{ url }],
    } = (component as any)?.product;
    expect(imgWrapEl.attributes.src.trim()).toEqual(url);
  });
  it('тег img должен иметь правильное связывание свойства alt с свойством "name" объекта "product"', () => {
    (component as any).product = product;
    fixture.detectChanges();
    const imgWrapEl = fixture.debugElement.query(By.css('.img'));
    expect(imgWrapEl).toBeTruthy();
    const { name } = (component as any)?.product;
    expect(imgWrapEl.attributes.alt.trim()).toEqual(name);
  });

  // check events
  it('при вызове метода addToBasket(), должно эмиттится кастомное событие "toCart"', () => {
    (component as any).product = product;
    fixture.detectChanges();
    const toCartSpy = spyOn(
      (component as any).toCart,
      'emit'
    ).and.callThrough();
    (component as any).addToBasket();
    expect(toCartSpy).toHaveBeenCalled();
  });
  it('при вызове метода redirectTo(), должно эмиттится кастомное событие "goToProduct"', () => {
    const toCartSpy = spyOn(
      (component as any).goToProduct,
      'emit'
    ).and.callThrough();
    (component as any).redirectTo();
    expect(toCartSpy).toHaveBeenCalled();
  });
  it('клик на кнопку "Добавить в корзину" должен вызывать метод addToBasket()', () => {
    (component as any).product = product;
    fixture.detectChanges();
    const addToBasketSpy = spyOn(
      component as any,
      'addToBasket'
    ).and.callThrough();
    const btn = fixture.debugElement.query(By.css('.btn'));
    btn.triggerEventHandler('click', null);
    expect(addToBasketSpy).toHaveBeenCalled();
  });
  it('клик на элемент с селектором .description-col должен вызывать метод addToBasket()', () => {
    (component as any).product = product;
    fixture.detectChanges();
    const redirectToSpy = spyOn(
      component as any,
      'redirectTo'
    ).and.callThrough();
    const el = fixture.debugElement.query(By.css('.description-col'));
    el.triggerEventHandler('click', null);
    expect(redirectToSpy).toHaveBeenCalled();
  });
});
