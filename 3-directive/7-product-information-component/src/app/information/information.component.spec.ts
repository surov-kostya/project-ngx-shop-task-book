import { ReviewPipe } from './../../../../2-cart-component/src/shared/review.pipe';
import { RatePipe } from './../../../../../2-pipe/2-rate-pipe/src/shared/rate.pipe';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { InformationComponent } from './information.component';
import { oneProduct } from '../../../../../shared/mocks/productMock';

describe('[Moдуль 3] Компонент информации о продукте', () => {
  let fixture: ComponentFixture<InformationComponent>;
  let component: InformationComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InformationComponent, RatePipe, ReviewPipe],
    });
    fixture = TestBed.createComponent(InformationComponent);
    component = fixture.componentInstance;
    (component as any).product = oneProduct;
    fixture.detectChanges();
  });
  it('тег с селектором .h5 должен правильно интерполировать значение', () => {
    const productNameEL = fixture.debugElement.query(By.css('.h5'));
    expect(productNameEL).toBeTruthy();
    const [{ nativeNode: productNameNode }] = productNameEL.childNodes;
    expect(productNameNode.textContent.trim()).toEqual(
      (component as any)?.product.name
    );
  });
  it('тег с селектором .rate-amount должен правильно интерполировать значение', () => {
    const feedbackCountEL = fixture.debugElement.query(By.css('.rate-amount'));
    expect(feedbackCountEL).toBeTruthy();
    const [{ nativeNode: feedbackCountNode }] = feedbackCountEL.childNodes;
    expect(+feedbackCountNode.textContent.trim().slice(0, 1)).toEqual(
      (component as any)?.product.feedbacksCount
    );
  });
  it('тег с селектором .characteristicTitle должен правильно интерполировать значение', () => {
    const characteristicTitleEL = fixture.debugElement.query(
      By.css('.characteristicTitle')
    );
    expect(characteristicTitleEL).toBeTruthy();
    const [
      { nativeNode: characteristicTitleNode },
    ] = characteristicTitleEL.childNodes;
    expect(characteristicTitleNode.textContent.trim()).toEqual(
      (component as any)?.product.characteristics[0].title
    );
  });
  it('тег с селектором .charParams должен правильно интерполировать значение', () => {
    const charParamsEL = fixture.debugElement.query(By.css('.charParams'));
    expect(charParamsEL).toBeTruthy();

    const [{ nativeNode: charParamsNode }] = charParamsEL.childNodes;
    expect(charParamsNode.textContent.split(':')[0].trim()).toEqual(
      (component as any)?.product.characteristics[0].items[0].name
    );
    expect(charParamsNode.textContent.split(':')[1].trim()).toEqual(
      (component as any)?.product.characteristics[0].items[0].value
    );
  });

  it('тег с селектором .price-text должен правильно интерполировать значение', () => {
    const priceEL = fixture.debugElement.query(By.css('.price-text'));
    expect(priceEL).toBeTruthy();
    const [{ nativeNode: priceELNode }] = priceEL.childNodes;
    expect(+priceELNode.textContent.trim().slice(1)).toEqual(
      (component as any)?.product.price
    );
  });
  it('клик на тег с селектором .more-info должен вызывать метод "show()"', () => {
    const moreBtn = fixture.debugElement.query(By.css('.more-info'));
    expect((component as any).isShow).toEqual(false);
    moreBtn.triggerEventHandler('click', null);
    expect((component as any).isShow).toEqual(true);
  });
});
