import { ShopCardComponent } from './shop-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cartProducts } from 'shared/mocks/cart.mock';
import { By } from '@angular/platform-browser';

describe('[Moдуль 1]  app-shop-card', () => {
  let fixture: ComponentFixture<ShopCardComponent>;
  let component: ShopCardComponent;
  let incrementSpy: jasmine.Spy;
  let decrementSpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCardComponent],
    });
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = cartProducts[2];
    fixture.detectChanges();
    spyOn(component as any, 'incrementProductInCart').and.callThrough();
    incrementSpy = spyOn(
      (component as any)?.increment,
      'emit'
    ).and.callThrough();
    spyOn(component as any, 'decrementProductInCart').and.callThrough();
    decrementSpy = spyOn(
      (component as any)?.decrement,
      'emit'
    ).and.callThrough();
  });

  it('компонент должен иметь публичный метод decrementProductInCart(), который связан со свойством click кнопки с селектором .count-decrement ', () => {
    expect((component as any).decrementProductInCart).toBeTruthy();
  });
  // it('компонент должен иметь публичный метод decrementProductInCart(), который связан со свойством click кнопки с селектором .count-decrement ', () => {
  //   expect((component as any).decrementProductInCart).toBeTruthy();
  // });
  it('компонент должен иметь публичный метод incrementProductInCart, который связан со свойством click кнопки с селектором .count-increment ', () => {
    expect((component as any).incrementProductInCart).toBeTruthy();
  });
  xit('компонент должен иметь публичное input свойство product с интерфейсом IProduct', () => {
    expect((component as any).product).toBeTruthy();
  });
  xit('клик на кнопку с селектором .count-increment должен вызывать метод incrementProductInCart()', () => {
    const btnInc = fixture.debugElement.query(By.css('.count-increment'));
    expect(btnInc).toBeTruthy();
    btnInc.triggerEventHandler('click', null);
    // expect((component as any).incrementProductInCart).toHaveBeenCalledBefore(
    //   incrementSpy
    // );
    expect((component as any).increment.emit).toHaveBeenCalled();
  });
  it('клик на кнопку с селектором .count-decrement должен вызывать метод decrementProductInCart()', () => {
    const btnInc = fixture.debugElement.query(By.css('.count-decrement'));
    expect(btnInc).toBeTruthy();
    btnInc.triggerEventHandler('click', null);
    expect((component as any).decrementProductInCart).toHaveBeenCalled();
    // expect((component as any).decrement.emit).toHaveBeenCalled();
  });

  xit('тег с селектором .product-name должен правильно интерполировать значение свойства "name" объекта "product"', () => {
    const prodNameEL = fixture.debugElement.query(By.css('.product-name'));
    expect(prodNameEL).toBeTruthy();
    const [{ nativeNode: prodNameNode }] = prodNameEL.childNodes;
    expect(prodNameNode.textContent.trim()).toEqual(
      (component as any)?.product.name
    );
  });

  xit('тег img должен иметь правильное связывание свойств src c значение поля product.images[0].url в объекте product и alt с полем  name объекта product  ', () => {
    const imgWrapEl = fixture.debugElement.query(By.css('.product-picture'));
    expect(imgWrapEl).toBeTruthy();
    const {
      images: [{ url }],
      name,
    } = (component as any)?.product;
    expect(imgWrapEl.attributes.src.trim()).toEqual(url);
    expect(imgWrapEl.attributes.alt.trim()).toEqual(name);
  });
  // tslint:disable-next-line:max-line-length
  xit('тег с селектором .price-text должен быть добавлен в шаблоне и правильно интерполировать значение свойства price объекта product', () => {
    const { price } = (component as any)?.product;
    const priceEl = fixture.debugElement.query(By.css('.price-text'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    expect(
      priceNode.textContent.slice(0, priceNode.textContent.length - 1)
    ).toEqual(`${price.toString()}`);
  });
  // tslint:disable-next-line:max-line-length
  xit('тег с селектором  .counter__value должен быть добавить в шаблон и правильно интерполировать значение поля "count" объекта "product"', () => {
    const { count } = (component as any)?.product;
    const counterEl = fixture.debugElement.query(By.css('.counter__value'));
    expect(counterEl).toBeTruthy();
    const [{ nativeNode: counterNode }] = counterEl.childNodes;
    expect(+counterNode.textContent.trim()).toEqual(+`${count.toString()}.00`);
  });

  // tslint:disable-next-line:max-line-length
  xit('тег с селектором .total должен быть в шаблоне и правильно интерполировать значение цены, т.е поля price объекта product с учетом количества выбранного товара, т.е значение поля count объекта product ', () => {
    const { price } = (component as any)?.product;
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
});
