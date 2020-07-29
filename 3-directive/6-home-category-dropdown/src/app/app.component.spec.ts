import { AppComponent } from './../../../../3-directive/6-home-category-dropdown/src/app/app.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, SideMenuComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    (component as any).cartProducts = [];
    fixture.detectChanges();
  });
  it('компонент должен иметь свойство categories ', () => {
    expect((component as any).categories).toBeTruthy();
  });
  it('компонент должен иметь свойство terminalMessage ', () => {
    expect((component as any).categories).toBeTruthy();
  });

  it(`компонент должен иметь свойство 'Компонент выбора категории товара, домашняя страница'`, () => {
    expect((component as any).title).toEqual(
      'Компонент выбора категории товара, домашняя страница'
    );
  });
  it('компонент должен иметь свойство categories ', () => {
    expect((component as any).categories).toBeTruthy();
  });
  it('компонент должен иметь метод "selectedCategory()" ', () => {
    expect((component as any).selectedCategory).toBeTruthy();
  });
});
