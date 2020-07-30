import { BannerSliderComponent } from './banner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { suggestedProducts } from 'shared/mocks/suggested.mock';

describe('[Moдуль 3]  Баннер компонент', () => {
  let fixture: ComponentFixture<BannerSliderComponent>;
  let component: BannerSliderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerSliderComponent, BannerSliderComponent],
      imports: [BrowserModule, BrowserAnimationsModule],
    });
    fixture = TestBed.createComponent(BannerSliderComponent);
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
});
