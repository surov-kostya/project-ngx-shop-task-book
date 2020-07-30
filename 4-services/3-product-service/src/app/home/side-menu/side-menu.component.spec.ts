import { categoriesMock } from '../../../../../../shared/mocks/categories.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { SideMenuComponent } from './side-menu.component';
import { BannerSliderComponent } from '../banner/banner.component';

describe('[Moдуль 3]  Компонент список категорий товаров, домашняя страница', () => {
  let fixture: ComponentFixture<SideMenuComponent>;
  let component: SideMenuComponent;
  let selectedSubCategorySpy: jasmine.Spy;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SideMenuComponent,
        SideMenuComponent,
        BannerSliderComponent,
      ],
    });
    fixture = TestBed.createComponent(SideMenuComponent);
    component = fixture.componentInstance;
    (component as any).categories = categoriesMock;
    (component as any).currentCategory = {};

    fixture.detectChanges();
    spyOn(component as any, 'redirectTo').and.callThrough();
    selectedSubCategorySpy = spyOn(
      (component as any).selectedSubCategory,
      'emit'
    ).and.callThrough();
  });

  it('компонент должен иметь свойство categories ', () => {
    expect((component as any).categories).toBeTruthy();
  });
  it('компонент должен иметь метод "hover"()', () => {
    expect((component as any).hover).toBeTruthy();
  });
  it('компонент должен иметь метод "mouseLeave()"', () => {
    expect((component as any).mouseLeave).toBeTruthy();
  });
  it('компонент должен иметь метод "redirectTo()" ', () => {
    expect((component as any).redirectTo).toBeTruthy();
  });
  it('тег с селектором .category-name должен правильно интерполировать значение', () => {
    const categoryNameEL = fixture.debugElement.query(By.css('.category-name'));
    expect(categoryNameEL).toBeTruthy();
    const [{ nativeNode: categoryNameNode }] = categoryNameEL.childNodes;
    expect(categoryNameNode.textContent.trim()).toEqual(
      (component as any)?.categories[0].name
    );
  });

  it('тег с селектором .subCatName должен правильно интерполировать значение', () => {
    const subCategoryNameEL = fixture.debugElement.query(By.css('.subCatName'));
    expect(subCategoryNameEL).toBeTruthy();
    const [{ nativeNode: subCategoryNameNode }] = subCategoryNameEL.childNodes;
    expect(subCategoryNameNode.textContent.trim()).toEqual(
      (component as any)?.categories[0].subCategories[0].name
    );
  });
  it('клик на элемент подкатегории должен быть вызван метод redirectTo()', () => {
    const subCat = fixture.debugElement.query(By.css('.subCat'));
    subCat.triggerEventHandler('click', null);
    expect((component as any).redirectTo).toHaveBeenCalledBefore(
      selectedSubCategorySpy
    );
    expect((component as any).selectedSubCategory.emit).toHaveBeenCalled();
  });
});
