import { ShopCardComponent } from './shop-card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('[Moдуль 1]  Компонент товара в корзине', () => {
  let fixture: ComponentFixture<ShopCardComponent>;
  let component: ShopCardComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopCardComponent],
    });
    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен иметь метод decrementProductInCart ', () => {
    expect((component as any).decrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь метод removeProductFromCart', () => {
    expect((component as any).removeProductFromCart).toBeTruthy();
  });
  it('компонент должен иметь метод incrementProductInCart', () => {
    expect((component as any).incrementProductInCart).toBeTruthy();
  });
  it('компонент должен иметь свойство product', () => {
    expect((component as any).product).toBeTruthy();
  });

  it('тег с селектором .product-desc должен правильно интерполировать title', () => {
    const prodNameEL = fixture.debugElement.query(By.css('.product-desc'));
    expect(prodNameEL).toBeTruthy();
    const [{ nativeNode: prodNameNode }] = prodNameEL.childNodes;
    expect(prodNameNode.textContent.trim()).toEqual(
      (component as any)?.product.name
    );
  });

  xit('тег img должен иметь правильное связывание свойств src и alt', () => {
    const imgWrapEl = fixture.debugElement.query(By.css('.product-img'));
    expect(imgWrapEl).toBeTruthy();
    const {
      images: [{ url }],
      name,
    } = (component as any)?.product;
    const [{ nativeNode: imgNode }] = imgWrapEl.childNodes;
    expect(imgNode.attributes.src.textContent).toEqual(url);
    expect(imgNode.attributes.alt.textContent).toEqual(name);
  });
  xit('тег с селектором .price-text должен правильно интерполировать price', () => {
    const { price } = (component as any)?.product;
    const priceEl = fixture.debugElement.query(By.css('.price-text'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    const priceFromNode = priceNode.textContent.trim();
    expect(`${priceFromNode.slice(0, 3)}${priceFromNode.slice(4)}`).toEqual(
      `€${price.toString()}.00`
    );
  });
  xit('тег с селектором .price  и .counter__value должен правильно интерполировать total', () => {
    const { price } = (component as any)?.product;
    const priceEl = fixture.debugElement.query(By.css('.price'));
    const counterEl = fixture.debugElement.query(By.css('.counter__value'));
    expect(price).toBeTruthy();
    const [{ nativeNode: priceNode }] = priceEl.childNodes;
    const [{ nativeNode: counterNode }] = counterEl.childNodes;

    const priceFromNode = priceNode.textContent.trim();
    expect(
      Number(`${priceFromNode.slice(0, 3)}${priceFromNode.slice(4)}`.slice(1)) /
        counterNode.textContent.trim()
    ).toEqual(Number(`${price.toString()}.00`));
  });
});
