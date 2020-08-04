import { ShopCardComponent } from './shop-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { cartProducts } from 'shared/mocks/cart.mock';
import { By } from '@angular/platform-browser';

describe('[Модуль1: Shop card: shop-card.component.spec]', () => {
  let fixture: ComponentFixture<ShopCardComponent>;
  let component: ShopCardComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCardComponent],
    });
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    (component as any).product = cartProducts[0];
    fixture.detectChanges();
  });
  it('компонент должен иметь публичное Input() свойство product с интерфейсом IProduct', () => {
    expect((component as any).product).toBeTruthy();
  });
  it('компонент должен иметь публичное Output() свойство increment ', () => {
    expect((component as any).increment).toBeTruthy();
  });
  it('компонент должен иметь публичное Output() свойство decrement ', () => {
    expect((component as any).decrement).toBeTruthy();
  });
  // tslint:disable-next-line:max-line-length
  it('компонент должен иметь публичный метод decrementProductInCart(), который должен быть связан с атрибутом click кнопки с селектором .count-decrement ', () => {
    expect((component as any).decrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь публичный метод incrementProductInCart(), который должен быть связан с атрибутом click кнопки с селектором .count-increment ', () => {
    expect((component as any).incrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь публичное Input() свойство product с интерфейсом IProduct', () => {
    expect((component as any).product).toBeTruthy();
  });
  it('компонент должен иметь публичное Output() свойство increment ', () => {
    expect((component as any).increment).toBeTruthy();
  });
  it('компонент должен иметь публичное Output() свойство decrement ', () => {
    expect((component as any).decrement).toBeTruthy();
  });
  //
  it('тег с селектором .product-name должен правильно интерполировать значение свойства "name" объекта "product"', () => {
    const prodNameEL = fixture.debugElement.query(By.css('.product-name'));
    expect(prodNameEL).toBeTruthy();
    const [{ nativeNode: prodNameNode }] = prodNameEL.childNodes;
    expect(prodNameNode.textContent.trim()).toEqual(
      (component as any)?.product.name
    );
  });
  it('тег img должен иметь правильное связывание свойств src c значением свойства product.images[0].url в объекте product ', () => {
    const imgWrapEl = fixture.debugElement.query(By.css('.product-picture'));
    expect(imgWrapEl).toBeTruthy();
    const {
      images: [{ url }],
    } = (component as any)?.product;
    expect(imgWrapEl.attributes.src.trim()).toEqual(url);
  });
  it('тег img должен иметь правильное связывание свойств alt с свойством name объекта product  ', () => {
    const imgWrapEl = fixture.debugElement.query(By.css('.product-picture'));
    expect(imgWrapEl).toBeTruthy();
    const { name } = (component as any)?.product;
    expect(imgWrapEl.attributes.alt.trim()).toEqual(name);
  });
  // tslint:disable-next-line:max-line-length
  it('тег с селектором .price-text должен быть добавлен в шаблон и правильно интерполировать значение свойства price объекта product', () => {
    const { price } = (component as any)?.product;
    const priceEl = fixture.debugElement.query(By.css('.price-text'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    expect(
      priceNode.textContent.slice(0, priceNode.textContent.length - 1)
    ).toEqual(`${price.toString()}`);
  });
  it('тег с селектором .total должен быть добавлен в шаблон и правильно интерполировать значение цены, т.е поля price объекта product с учетом количества выбранного товара, т.е значение поля count объекта product ', () => {
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
  // tslint:disable-next-line:max-line-length
  it('тег с селектором  .counter__value должен быть добавлен в шаблон и правильно интерполировать значение поля "count" объекта "product"', () => {
    const { count } = (component as any)?.product;
    const counterEl = fixture.debugElement.query(By.css('.counter__value'));
    expect(counterEl).toBeTruthy();
    const [{ nativeNode: counterNode }] = counterEl.childNodes;
    expect(+counterNode.textContent.trim()).toEqual(+`${count.toString()}.00`);
  });
  it('клик на кнопку с селектором .count-increment должен вызывать метод incrementProductInCart()', () => {
    spyOn(component as any, 'incrementProductInCart').and.callThrough();
    const incrementSpy = spyOn(
      (component as any)?.increment,
      'emit'
    ).and.callThrough();
    const btnInc = fixture.debugElement.query(By.css('.count-increment'));
    expect(btnInc).toBeTruthy();
    btnInc.triggerEventHandler('click', null);
    expect((component as any).incrementProductInCart).toHaveBeenCalledBefore(
      incrementSpy
    );
  });
  it('клик на кнопку с селектором .count-decrement должен вызывать метод decrementProductInCart()', () => {
    spyOn(component as any, 'decrementProductInCart').and.callThrough();
    const decrementSpy = spyOn(
      (component as any)?.decrement,
      'emit'
    ).and.callThrough();
    const btnInc = fixture.debugElement.query(By.css('.count-decrement'));
    expect(btnInc).toBeTruthy();
    btnInc.triggerEventHandler('click', null);
    expect((component as any).decrementProductInCart).toHaveBeenCalledBefore(
      decrementSpy
    );
  });

  // tslint:disable-next-line:max-line-length
  it('при клике на кнопку с селектором .count-decrement, должно уменьшиться значение поля "count", по средствам вызова метода decrementProductInCart()', () => {
    const { count } = (component as any)?.product;
    const decrementBtn = fixture.debugElement.query(By.css('.count-decrement'));
    decrementBtn.triggerEventHandler('click', null);

    if ((component as any)?.product.count > 1) {
      expect((component as any)?.product.count + 1).toEqual(count);
    }
  });
  // tslint:disable-next-line:max-line-length
  it('при клике на кнопку с селектором .count-increment, должно увеличиться значение поля "count", по средствам вызова метода incrementProductInCart()', () => {
    const { count } = (component as any)?.product;
    const decrementBtn = fixture.debugElement.query(By.css('.count-increment'));
    decrementBtn.triggerEventHandler('click', null);
    expect((component as any)?.product.count - 1).toEqual(count);
  });
});
