import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCardComponent } from './product-card.component';
import { By } from '@angular/platform-browser';
import { productData } from 'shared/mocks/mock-product';
import { EventEmitter } from '@angular/core';

describe('[Moдуль 1: Suggested product card: product-card.component.spec ]', () => {
  let fixture: ComponentFixture<ProductCardComponent>;
  let component: ProductCardComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardComponent],
    });
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    (component as any).product = productData;
    fixture.detectChanges();
  });
  // is it defined
  it('компонент должен иметь публичный метод "redirectTo()"', () => {
    expect((component as any).redirectTo).toBeTruthy();
  });
  it('компонент должен иметь кастомное EventEmitter событие "goToProduct"', () => {
    expect((component as any).goToProduct).toBeTruthy();
  });
  it('кастомное событие "goToProduct" должно быть экземпляром EventEmitter', () => {
    expect((component as any).goToProduct).toBeInstanceOf(EventEmitter);
  });
  it('компонент должен иметь кастомное свойство "product"', () => {
    expect(component.hasOwnProperty('product')).toBeTruthy();
  });
  // is it interpolated correctly
  it('тег с селектором .card-title должен правильно интерполировать значение свойства "name" объекта "product"', () => {
    const titleEL = fixture.debugElement.query(By.css('.card-title'));
    expect(titleEL).toBeTruthy();
    const { name } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(name);
  });
  it('тег img должен иметь правильное связывание свойствa "src" c свойством "images[0].url" объекта "product"', () => {
    const imgEL = fixture.debugElement.query(By.css('.card-img-top'));
    expect(imgEL).toBeTruthy();
    const {
      images: [{ url }],
    } = (component as any)?.product;
    expect(imgEL.attributes.src.trim()).toEqual(url);
  });
  it('тег img должен иметь правильное связывание свойствa "alt" с свойством "name" объекта "product"', () => {
    const imgEL = fixture.debugElement.query(By.css('.card-img-top'));
    expect(imgEL).toBeTruthy();
    const { name } = (component as any)?.product;
    expect(imgEL.attributes.alt).toEqual(name);
  });
  it('тег с селектором .rate-amount должен правильно интерполировать значение свойства "feedbacksCount" объекта "product"', () => {
    const rateEL = fixture.debugElement.query(By.css('.rate-amount'));
    expect(rateEL).toBeTruthy();
    const { feedbacksCount } = (component as any)?.product;
    const [{ nativeNode: rateNode }] = rateEL.childNodes;
    expect(+rateNode.textContent.substring(0, 2).trim()).toEqual(
      feedbacksCount
    );
  });
  it('тег с селектором .price-text должен правильно интерполировать значение свойства "price" объекта "product"', () => {
    const titleEL = fixture.debugElement.query(By.css('.price-text'));
    expect(titleEL).toBeTruthy();
    const { price } = (component as any)?.product;
    const [{ nativeNode: titleNode }] = titleEL.childNodes;
    expect(titleNode.textContent.trim()).toEqual(`${price}€`);
  });

  it('должен вызывать метод redirectTo()', () => {
    const redirectToSpy = spyOn(
      component as any,
      'redirectTo'
    ).and.callThrough();
    (component as any).redirectTo();
    expect(redirectToSpy).toHaveBeenCalled();
  });
  it('клик на компонент должен вызывать метод redirectTo()', () => {
    const redirectToSpy = spyOn(
      component as any,
      'redirectTo'
    ).and.callThrough();
    const icon = fixture.debugElement.query(By.css('.card-component'));
    icon.triggerEventHandler('click', null);
    expect(redirectToSpy).toHaveBeenCalled();
  });
  // xit('при вызове метода "redirectTo()" должно эмиттится кастомное событие "goToProduct"', () => {
  //   const goToProductSpy = spyOn(
  //     (component as any).goToProduct,
  //     'emit'
  //   ).and.callThrough();
  //   (component as any).redirectTo();
  //   expect(goToProductSpy).toHaveBeenCalled();
  // });
});
