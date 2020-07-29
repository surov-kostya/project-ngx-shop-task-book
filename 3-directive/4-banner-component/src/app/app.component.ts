import { Component } from '@angular/core';

export interface IBanner {
  subCategoryId: string;
  title: string;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title = 'Баннер компонент';
  public terminalMessage: string;
  public items: IBanner[] = [
    {
      subCategoryId: 'kompyutery-noutbuki-i-po',
      title: 'Компьютеры, ноутбуки и ПО',
      image: '/assets/images/carousel-laptop.png',
    },
    {
      subCategoryId: 'smartfony-i-gadzhety',
      title: 'Смартфоны и гаджеты',
      image: '/assets/images/carousel-phone.png',
    },
    {
      subCategoryId: 'igry-i-xobbi',
      title: ' Игры и хобби',
      image: '/assets/images/carousel-console.png',
    },
  ];
  public suggestedCategory(subCat: any) {
    this.terminalMessage = subCat;
  }
}
