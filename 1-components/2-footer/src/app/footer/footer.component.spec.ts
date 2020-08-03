import { environment } from './../../../../../environments/environment.prod';
import { FooterComponent } from './footer.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('[Moдуль 1] Футтер компонент', () => {
  let fixture: ComponentFixture<FooterComponent>;
  let component: FooterComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent],
    });
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    (component as any).author = environment.author;
    (component as any).currentYear = new Date().getFullYear();
    fixture.detectChanges();
  });
  it('компонент должен иметь публичное Input свойство "author", которое должно иметь связывание с компонентом с селектором .footer-title, как первая часть строки до зяпятой', () => {
    expect((component as any).author).toBeTruthy();
  });
  it('компонент должен иметь публичное Input свойство "currentYear", которое должно иметь связывание с компонентом с селектором .footer-title, как вторая часть строки после зяпятой', () => {
    expect((component as any).currentYear).toBeTruthy();
  });
  it('тег с селектором .footer-title должен правильно интерполировать значение текущего года и имя автора', () => {
    const currentYear = (component as any)?.currentYear;

    const el = fixture.debugElement.query(By.css('.footer-title'));
    expect(el).toBeTruthy();
    const [{ nativeNode: priceNode }] = el.childNodes;
    const yearFromNode = +priceNode.textContent.split(',')[0].split(' ')[1];
    expect(yearFromNode).toEqual(currentYear);
    expect(priceNode.textContent.split(',')[1].slice(1).trim()).toBeTruthy();
  });
});
