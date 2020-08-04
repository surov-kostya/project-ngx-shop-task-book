import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-shop-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input()
  public author: string;
  @Input()
  public currentYear: number;
}
