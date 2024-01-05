// show-hide.directive.ts
import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[ShowHide]'
})
export class ShowHideDirective implements OnInit {
  @Input({required: true}) set ShowHide(value: boolean) {
    this.toggleClass(value);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    
    this.renderer.addClass(this.el.nativeElement, 'add-show');
  }

  private toggleClass(show: boolean) {
    const className = show ? 'add-show' : 'add-show.closed';
    const oppositeClassName = show ? 'add-show.closed' : 'add-show';

    this.renderer.removeClass(this.el.nativeElement, oppositeClassName);
    this.renderer.addClass(this.el.nativeElement, className);
  }
}
