import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input[disableEnter]'
})
export class DisableEnterDirective {

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }
}