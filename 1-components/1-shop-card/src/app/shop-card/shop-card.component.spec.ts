import { ShopCardComponent } from './shop-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cartProducts } from 'shared/mocks/cart.mock';
import { By } from '@angular/platform-browser';

describe('[Модуль1: Shop card: shop-card.component.spec]', () => {
  let fixture: ComponentFixture<ShopCardComponent>;
  let component: ShopCardComponent;
  let product = cartProducts[0];
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCardComponent],
    });
  });

  it('компонент должен иметь кастомное Event Emitter событие "increment"', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    expect((component as any).increment).toBeTruthy();
  });
  it('компонент должен иметь кастомное Event Emitter событие "decrement"', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    expect((component as any).decrement).toBeTruthy();
  });
  // tslint:disable-next-line:max-line-length
  it('компонент должен иметь публичный метод decrementProductInCart(), который должен иметь связывание с событием click кнопки с селектором .count-decrement ', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    expect((component as any).decrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь публичный метод incrementProductInCart(), который должен иметь связывание с событием click кнопки с селектором .count-increment ', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    expect((component as any).incrementProductInCart).toBeTruthy();
  });

  it('тег с селектором .product-name должен правильно интерполировать значение свойства "name" объекта "product"', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    const prodNameEL = fixture.debugElement.query(By.css('.product-name'));
    expect(prodNameEL).toBeTruthy();
    const [{ nativeNode: prodNameNode }] = prodNameEL.childNodes;
    expect(prodNameNode.textContent.trim()).toEqual(product.name);
  });
  it('тег img должен иметь правильное связывание свойства "src" c значением свойства product.images[0].url объекта "product" ', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    const imgWrapEl = fixture.debugElement.query(By.css('.product-picture'));
    expect(imgWrapEl).toBeTruthy();
    const {
      images: [{ url }],
    } = product;

    expect(imgWrapEl.attributes.src.trim()).toEqual(url);
  });
  it('тег img должен иметь правильное связывание свойства "alt" с свойством name объекта "product"', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    const imgWrapEl = fixture.debugElement.query(By.css('.product-picture'));
    expect(imgWrapEl).toBeTruthy();
    const { name } = cartProducts[0];
    expect(imgWrapEl.attributes.alt.trim()).toEqual(name);
  });
  // tslint:disable-next-line:max-line-length
  it('тег с селектором .price-text должен быть добавлен в шаблон и правильно интерполировать значение свойства "price" объекта "product"', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    const { price } = cartProducts[0];
    const priceEl = fixture.debugElement.query(By.css('.price-text'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    expect(
      priceNode.textContent.slice(0, priceNode.textContent.length - 1)
    ).toEqual(`${price.toString()}`);
  });
  it('тег с селектором .total должен быть добавлен в шаблон и правильно интерполировать значение результирующей цены "product.price * product.count" ', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    const { price } = cartProducts[0];
    const totalEl = fixture.debugElement.query(By.css('.total'));
    const counterEl = fixture.debugElement.query(By.css('.counter__value'));
    expect(totalEl).toBeTruthy();
    const [{ nativeNode: totalNode }] = totalEl.childNodes;
    const [{ nativeNode: counterNode }] = counterEl.childNodes;
    const priceFromNode = totalNode.textContent.trim();
    // tslint:disable-next-line:radix
    expect(parseInt(priceFromNode) / counterNode.textContent.trim()).toEqual(
      +`${price.toString()}`
    );
  });
  // tslint:disable-next-line:max-line-length
  it('тег с селектором  .counter__value должен быть добавлен в шаблон и правильно интерполировать значение поля "count" объекта "product"', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    const { count } = (component as any)?.product;
    const counterEl = fixture.debugElement.query(By.css('.counter__value'));
    expect(counterEl).toBeTruthy();
    const [{ nativeNode: counterNode }] = counterEl.childNodes;
    expect(+counterNode.textContent.trim()).toEqual(+`${count.toString()}.00`);
  });
  // tslint:disable-next-line:max-line-length
  it('при вызове метода decrementProductInCart(), должно уменьшиться значение свойства "count"', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    const { count } = (component as any).product;
    (component as any).decrementProductInCart();
    if ((component as any)?.product.count > 1) {
      expect((component as any)?.product.count + 1).toEqual(count);
    }
  });
  // tslint:disable-next-line:max-line-length
  it('при вызове метода incrementProductInCart(), должно увеличиться значение свойства "count"', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    const { count } = cartProducts[0];
    (component as any).incrementProductInCart();
    expect((component as any).product.count - 1).toEqual(count);
  });
  it('клик на кнопку с селектором .count-increment должен вызывать метод incrementProductInCart()', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    const incrementSpy = spyOn(
      component as any,
      'incrementProductInCart'
    ).and.callThrough();
    const btnInc = fixture.debugElement.query(By.css('.count-increment'));
    expect(btnInc).toBeTruthy();
    btnInc.triggerEventHandler('click', null);
    expect(incrementSpy).toHaveBeenCalled();
  });
  it('клик на кнопку с селектором .count-decrement должен вызывать метод decrementProductInCart()', () => {
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = product;
    fixture.detectChanges();
    const decrementSpy = spyOn(
      component as any,
      'decrementProductInCart'
    ).and.callThrough();
    const btnInc = fixture.debugElement.query(By.css('.count-decrement'));
    expect(btnInc).toBeTruthy();
    btnInc.triggerEventHandler('click', null);
    expect(decrementSpy).toHaveBeenCalled();
  });
});
