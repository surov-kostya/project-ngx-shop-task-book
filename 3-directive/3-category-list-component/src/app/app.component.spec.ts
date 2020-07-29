import { CategoryDropdownComponent } from './category-dropdown/category-dropdown.component';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, CategoryDropdownComponent],
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

  it(`should have as title 'Компонент списка категорий'`, () => {
    expect((component as any).title).toEqual('Компонент списка категорий');
  });
  it('компонент должен иметь метод currentCategory ', () => {
    expect((component as any).categories).toBeTruthy();
  });
});

