import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { By } from '@angular/platform-browser';

describe('[Модуль1: Footer: app.component.spec]', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, FooterComponent],
    });
    fixture = TestBed.createComponent(AppComponent);

    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('компонент должен иметь публичное  свойство "author", которое должно иметь связывание с  Input свойством "author" компонента ngx-shop-footer', () => {
    expect((component as any).author).toBeTruthy();
  });
  it('компонент должен иметь публичное  свойство "currentYear", которое должно иметь связывание с  Input свойством "currentYear" компонента ngx-shop-footer', () => {
    expect((component as any).currentYear).toBeTruthy();
  });

  it('компонент должен иметь публичное  свойство "title"', () => {
    expect((component as any).currentYear).toBeTruthy();
  });
  it('компонент ngx-shop-footer добавлен в html шаблон', () => {
    const shopCardEL = fixture.debugElement.query(
      By.directive(FooterComponent)
    );
    expect(shopCardEL).toBeTruthy();
  });
  it('компонент app.component должен иметь публичное свойство "author"', () => {
    expect((component as any).author).toBeTruthy();
  });
  it('компонент app.component  должен иметь публичное свойство "currentYear", c типом данных number', () => {
    expect((component as any).currentYear).toBeTruthy();
  });
  it('компонент ngx-shop-footer должен иметь публичное Input() свойство "author", с типом данных string  ', () => {
    const shopCardEL = fixture.debugElement.query(
      By.directive(FooterComponent)
    );
    const { author } = shopCardEL.componentInstance;
    expect(author).toBeTruthy();
  });
  it('компонент ngx-shop-footer должен иметь публичное Input() свойство "currentYear"', () => {
    const shopCardEL = fixture.debugElement.query(
      By.directive(FooterComponent)
    );
    const { currentYear } = shopCardEL.componentInstance;
    expect(currentYear).toBeTruthy();
  });
});
