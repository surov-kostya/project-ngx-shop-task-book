import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductSliderComponent } from './product-slider.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { suggestedProducts } from 'shared/mocks/suggested.mock';

describe('[Moдуль 3]  Компонент слайдер фото товара', () => {
  let fixture: ComponentFixture<ProductSliderComponent>;
  let component: ProductSliderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSliderComponent],
      imports: [BrowserModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(ProductSliderComponent);
    component = fixture.componentInstance;
    (component as any).items = suggestedProducts[4].images;
    fixture.detectChanges();
  });
  it('компонент должен иметь свойство items', () => {
    expect((component as any).items).toBeTruthy();
  });

  it('тег с селектором .carousel-item должен иметь свойство "@slideAnimation" ', () => {
    const itemEL = fixture.debugElement.query(By.css('.carousel-item'));
    expect(itemEL.properties['@slideAnimation']).toBeTruthy();
  });

  it('тег img должен иметь правильное связывание свойств src и alt', () => {
    const imgWrapEl = fixture.debugElement.query(By.css('.img-wrap'));
    expect(imgWrapEl).toBeTruthy();
    const { url } = (component as any)?.items[0];
    const [{ nativeNode: imgNode }] = imgWrapEl.childNodes;
    const { src } = imgNode.attributes;
    expect(src.textContent).toEqual(url);
  });
});
