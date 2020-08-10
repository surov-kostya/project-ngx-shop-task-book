import { HeaderComponent } from '../header/header.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('[Модуль1: Header: header.component.spec]', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('компонент должен иметь публичное свойство "counter"', () => {
    expect((component as any).counter).toBeTruthy();
  });
  it('компонент должен иметь кастомное EventEmitter событие goToBasket', () => {
    expect((component as any).goToBasket).toBeTruthy();
  });
  it('компонент должен иметь публичный метод "redirectTo()"', () => {
    expect((component as any).redirectTo).toBeTruthy();
  });
  it('тег с селектором product-counter должен правильно интерполировать значение ', () => {
    const counter = fixture.debugElement.query(By.css('.product-counter'));
    expect(counter).toBeTruthy();
    const [{ nativeNode: counterNode }] = counter.childNodes;
    expect(+counterNode.textContent).toEqual((component as any).counter);
  });
  it('должен вызываться метод "redirectTo()"', () => {
    const redirectToSpy = spyOn(
      component as any,
      'redirectTo'
    ).and.callThrough();
    (component as any).redirectTo();
    expect(redirectToSpy).toHaveBeenCalled();
  });

  it('при вызове метода "redirectTo()" должно эмитится кастомное событие "goToBasket"', () => {
    const goToBasketSpy = spyOn(
      (component as any).goToBasket,
      'emit'
    ).and.callThrough();
    (component as any).redirectTo();
    expect(goToBasketSpy).toHaveBeenCalled();
  });

  it('при клике на тег с селектором ".basket" должен вызываться метод "redirectTo()"', () => {
    const redirectToSpy = spyOn(
      component as any,
      'redirectTo'
    ).and.callThrough();
    const basketIcon = fixture.debugElement.query(By.css('.basket'));
    basketIcon.triggerEventHandler('click', null);
    expect(redirectToSpy).toHaveBeenCalled();
  });
});
