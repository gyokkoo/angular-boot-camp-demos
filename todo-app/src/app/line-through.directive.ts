import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLineThrough]'
})
export class LineThroughDirective {

  @Input() set lineThrough(value: boolean) {
    if (value) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'text-decoration', 'line-through');
    } else {
      this.renderer.setStyle(this.elementRef.nativeElement, 'text-decoration', '');
    }
  }

  constructor(private elementRef: ElementRef,
              private renderer: Renderer2) {
  }

}
