import { trigger } from '@angular/animations';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';

describe('[Модуль1: Header: app.component.spec]', () => {
  let fixture;
  let component;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, HeaderComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));
  it('компонент должен иметь публичное  свойство "title"', () => {
    expect((component as any).title).toBeTruthy();
  });
  it('компонент должен иметь публичное  свойство "terminalMessage"', () => {
    expect((component as any).terminalMessage).toEqual('');
  });
  it('компонент должен иметь публичный метод "redirectTo()"', () => {
    expect((component as any).redirectTo).toBeTruthy();
  });
  it('тег с селектором ".terminalMessage" должен правильно интерпалировать значение свойства "terminalMessage"', () => {
    const terminalMessageComponent = fixture.debugElement.query(
      By.css('.terminalMessage')
    );
    const [
      { nativeNode: terminalMessageNode },
    ] = terminalMessageComponent.childNodes;
    expect(terminalMessageNode.textContent).toEqual(
      (component as any).terminalMessage
    );
  });
  it('тег с селектором ".title" должен правильно интерпалировать значение свойство "title"', () => {
    const titleComponent = fixture.debugElement.query(By.css('.title'));
    const [{ nativeNode: titleNode }] = titleComponent.childNodes;
    expect(titleNode.textContent).toEqual((component as any).title);
  });
  it('должен вызываться публичный метод "redirectTo()"', () => {
    const redirectTOSpy = spyOn(
      component as any,
      'redirectTo'
    ).and.callThrough();
    (component as any).redirectTo();
    expect(redirectTOSpy).toHaveBeenCalled();
  });
  it(`при клике на тег с селектором ".basket" должен вызываться публичный метод "redirectTo()" в app компоненте`, () => {
    const basketIcon = fixture.debugElement
      .query(By.directive(HeaderComponent))
      .query(By.css('.basket'));
    const redirectToSpy = spyOn(
      component as any,
      'redirectTo'
    ).and.callThrough();
    basketIcon.triggerEventHandler('click', null);
    expect(redirectToSpy).toHaveBeenCalled();
  });
});
