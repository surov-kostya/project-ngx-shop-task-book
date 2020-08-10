import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'ngx-shop-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public counter = 5;
  @Output()
  public goToBasket: EventEmitter<void> = new EventEmitter<void>();
  public redirectTo() {
    this.goToBasket.emit();
  }
}
