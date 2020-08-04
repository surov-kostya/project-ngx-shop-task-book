import { environment } from './../../../../../environments/environment.prod';
import { FooterComponent } from './footer.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('[Модуль1: Footer: footer.component.spec]', () => {
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

  it('тег с селектором .footer-title должен правильно интерполировать значение текущего года в строке до запятой', () => {
    const currentYear = (component as any)?.currentYear;

    const el = fixture.debugElement.query(By.css('.footer-title'));
    expect(el).toBeTruthy();
    const [{ nativeNode: priceNode }] = el.childNodes;
    const yearFromNode = +priceNode.textContent.split(',')[0].split(' ')[1];
    expect(yearFromNode).toEqual(currentYear);
  });
  it('тег с селектором .footer-title должен правильно интерполировать значение имени автора после запятой', () => {
    const el = fixture.debugElement.query(By.css('.footer-title'));
    expect(el).toBeTruthy();
    const [{ nativeNode: priceNode }] = el.childNodes;
    expect(priceNode.textContent.split(',')[1].slice(1).trim()).toBeTruthy();
  });
});
