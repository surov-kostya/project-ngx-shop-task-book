import { ICategory } from './../../../../../../shared/interfaces/categories.interface';

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  public currentName: string | null = null;

  public hover(name: string): void {}
  public mouseLeave(): void {}
  public redirectTo(subCategory: string): void {}
}
